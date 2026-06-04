import type { A1Level, Category, LearningStyle } from "../data/types";
import type { Direction } from "./settings";

/** Number of questions in one practice session. */
export const SESSION_SIZE = 12;

export interface Question {
  id: string;
  style: LearningStyle;
  category: Category;
  /** Short instruction shown above the question. */
  instruction: string;
  /** Visible prompt (hidden until played for audio). */
  prompt: string;
  answer: string;
  alternates: string[];
  /** Multiple-choice options (present only for that style). */
  options?: string[];
  /** Dutch text to speak for the audio style. */
  audioText?: string;
  /** Flashcard faces. */
  flashFront: string;
  flashBack: string;
  /** How this answer is built (shown in the feedback after answering). */
  explanation?: string;
}

/** Internal: a learnable item, before a style/direction is chosen. */
interface Card {
  id: string;
  dutch: string;
  english: string;
  dutchAlt: string[];
  englishAlt: string[];
  audioText: string; // always Dutch
  explanation?: string;
  poolDutch: string[]; // distractors when the answer is Dutch
  poolEnglish: string[]; // distractors when the answer is English
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function sample<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

function makeOptions(answer: string, pool: string[]): string[] {
  const distractors = sample(
    pool.filter((p) => p.toLowerCase() !== answer.toLowerCase()),
    3,
  );
  return shuffle([answer, ...distractors]);
}

// --- Card builders per category -------------------------------------------

// Keep articles consistent: if a word has an article, show it on the Dutch
// side AND include "the" in the English (e.g. "het brood" / "the bread").
function vocabDutch(v: A1Level["vocab"][number]): string {
  return v.article ? `${v.article} ${v.dutch}` : v.dutch;
}
function vocabEnglish(v: A1Level["vocab"][number]): string {
  return v.article ? `the ${v.english}` : v.english;
}

function vocabCards(level: A1Level): Card[] {
  const poolDutch = level.vocab.map(vocabDutch);
  const poolEnglish = level.vocab.map(vocabEnglish);
  return level.vocab.map((v, i) => ({
    id: `vocab-${i}`,
    dutch: vocabDutch(v),
    english: vocabEnglish(v),
    dutchAlt: [],
    englishAlt: [],
    audioText: vocabDutch(v),
    poolDutch,
    poolEnglish,
    explanation: v.article
      ? `"${v.dutch}" is a '${v.article}' word — learn each Dutch noun with its article.`
      : undefined,
  }));
}

function verbParadigm(verb: A1Level["verbs"][number]): string {
  const forms = verb.forms.map((f) => `${f.pronoun} ${f.dutch}`).join(" · ");
  return `${verb.infinitive} (${verb.english}): ${forms}`;
}

function verbCards(level: A1Level): Card[] {
  const cards: Card[] = [];
  const poolDutch: string[] = [];
  const poolEnglish: string[] = [];
  level.verbs.forEach((verb) => {
    verb.forms.forEach((f) => {
      poolDutch.push(`${f.pronoun} ${f.dutch}`);
      poolEnglish.push(f.english);
    });
    poolDutch.push(verb.infinitive);
    poolEnglish.push(verb.english);
  });
  level.verbs.forEach((verb, vi) => {
    const paradigm = verbParadigm(verb);
    verb.forms.forEach((f, fi) => {
      const phrase = `${f.pronoun} ${f.dutch}`;
      cards.push({
        id: `verb-${vi}-${fi}`,
        dutch: phrase,
        english: f.english,
        dutchAlt: [],
        englishAlt: [],
        audioText: phrase,
        poolDutch,
        poolEnglish,
        explanation: paradigm,
      });
    });
    cards.push({
      id: `verb-${vi}-inf`,
      dutch: verb.infinitive,
      english: verb.english,
      dutchAlt: [],
      englishAlt: [verb.english.replace(/^to /, "")],
      audioText: verb.infinitive,
      poolDutch,
      poolEnglish,
      explanation: `Infinitive (the whole verb). ${paradigm}`,
    });
  });
  return cards;
}

function grammarCards(level: A1Level): Card[] {
  const all = level.grammar.flatMap((g) => g.sentences);
  const poolDutch = all.map((s) => s.dutch);
  const poolEnglish = all.map((s) => s.english);
  const cards: Card[] = [];
  level.grammar.forEach((structure, gi) => {
    structure.sentences.forEach((s, si) => {
      cards.push({
        id: `grammar-${gi}-${si}`,
        dutch: s.dutch,
        english: s.english,
        dutchAlt: [],
        englishAlt: [],
        audioText: s.dutch,
        poolDutch,
        poolEnglish,
        explanation: `${structure.name}: ${structure.explanation}`,
      });
    });
  });
  return cards;
}

function buildCards(level: A1Level, category: Category): Card[] {
  if (category === "vocab") return vocabCards(level);
  if (category === "verbs") return verbCards(level);
  return grammarCards(level);
}

// --- Turning a card + style + direction into a question -------------------

function instructionFor(style: LearningStyle, direction: Direction): string {
  const toEnglish = direction === "nl-en";
  if (style === "audio") {
    return toEnglish ? "Listen and type the English meaning" : "Listen and type the Dutch";
  }
  if (style === "multiple-choice") {
    return toEnglish ? "Choose the English translation" : "Choose the Dutch translation";
  }
  if (style === "typing") {
    return toEnglish ? "Type the English translation" : "Type the Dutch translation";
  }
  return "Flashcard — flip, then rate yourself";
}

function toQuestion(card: Card, category: Category, style: LearningStyle, direction: Direction): Question {
  const toEnglish = direction === "nl-en";
  const prompt = toEnglish ? card.dutch : card.english;
  const answer = toEnglish ? card.english : card.dutch;
  const alternates = toEnglish ? card.englishAlt : card.dutchAlt;
  const pool = toEnglish ? card.poolEnglish : card.poolDutch;

  const base = {
    id: `${card.id}-${style}-${direction}`,
    style,
    category,
    instruction: instructionFor(style, direction),
    answer,
    alternates,
    flashFront: prompt,
    flashBack: answer,
    explanation: card.explanation,
  };

  if (style === "multiple-choice") {
    return { ...base, prompt, options: makeOptions(answer, pool) };
  }
  if (style === "audio") {
    return { ...base, prompt: "🔊 Press play to listen", audioText: card.audioText };
  }
  return { ...base, prompt };
}

/**
 * Build a shuffled practice session for a level + category, mixing the
 * selected learning styles randomly across questions, in the chosen direction.
 */
export function buildQuiz(
  level: A1Level,
  category: Category,
  styles: LearningStyle[],
  direction: Direction,
): Question[] {
  if (styles.length === 0) return [];
  const cards = sample(buildCards(level, category), SESSION_SIZE);
  return cards.map((card) => {
    const style = styles[Math.floor(Math.random() * styles.length)];
    return toQuestion(card, category, style, direction);
  });
}
