import type { A1Level, Category, LearningStyle } from "../data/types";

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

/** Internal: a learnable item before a style is chosen. */
interface Card {
  id: string;
  /** Text shown as the question (Dutch for vocab/verbs, English for grammar). */
  display: string;
  answer: string;
  alternates: string[];
  audioText: string; // Dutch text to speak
  pool: string[]; // distractor domain (same kind as the answer)
  explanation?: string;
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
// side AND include "the" in the English answer (e.g. "het brood" -> "the bread").
// Words without an article get neither (e.g. "groot" -> "big").
function vocabDutch(v: A1Level["vocab"][number]): string {
  return v.article ? `${v.article} ${v.dutch}` : v.dutch;
}
function vocabEnglish(v: A1Level["vocab"][number]): string {
  return v.article ? `the ${v.english}` : v.english;
}

function vocabCards(level: A1Level): Card[] {
  const pool = level.vocab.map(vocabEnglish);
  return level.vocab.map((v, i) => ({
    id: `vocab-${i}`,
    display: vocabDutch(v),
    answer: vocabEnglish(v),
    alternates: [],
    audioText: vocabDutch(v),
    pool,
    explanation: v.article
      ? `"${v.dutch}" is a '${v.article}' word — in Dutch you learn each noun together with its article.`
      : undefined,
  }));
}

/** Full conjugation line for a verb, e.g. "zijn (to be): ik ben · jij bent · …". */
function verbParadigm(verb: A1Level["verbs"][number]): string {
  const forms = verb.forms.map((f) => `${f.pronoun} ${f.dutch}`).join(" · ");
  return `${verb.infinitive} (${verb.english}): ${forms}`;
}

function verbCards(level: A1Level): Card[] {
  const cards: Card[] = [];
  const pool: string[] = [];
  level.verbs.forEach((verb) => {
    verb.forms.forEach((f) => pool.push(f.english));
    pool.push(verb.english);
  });
  level.verbs.forEach((verb, vi) => {
    const paradigm = verbParadigm(verb);
    verb.forms.forEach((f, fi) => {
      const phrase = `${f.pronoun} ${f.dutch}`;
      cards.push({
        id: `verb-${vi}-${fi}`,
        display: phrase,
        answer: f.english,
        alternates: [],
        audioText: phrase,
        pool,
        explanation: paradigm,
      });
    });
    // whole verb (infinitive)
    cards.push({
      id: `verb-${vi}-inf`,
      display: verb.infinitive,
      answer: verb.english,
      alternates: [verb.english.replace(/^to /, "")],
      audioText: verb.infinitive,
      pool,
      explanation: `Infinitive (the whole verb). ${paradigm}`,
    });
  });
  return cards;
}

function grammarCards(level: A1Level): Card[] {
  const pool = level.grammar.flatMap((g) => g.sentences).map((s) => s.dutch);
  const cards: Card[] = [];
  level.grammar.forEach((structure, gi) => {
    structure.sentences.forEach((s, si) => {
      cards.push({
        id: `grammar-${gi}-${si}`,
        // grammar tests sentence-building: shown English, answer in Dutch
        display: s.english,
        answer: s.dutch,
        alternates: [],
        audioText: s.dutch,
        pool,
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

// --- Turning a card + style into a question -------------------------------

function instructionFor(category: Category, style: LearningStyle): string {
  const toDutch = category === "grammar";
  if (style === "audio") {
    return toDutch ? "Listen and type the Dutch sentence" : "Listen and type the English meaning";
  }
  if (style === "multiple-choice") {
    return toDutch ? "Choose the correct Dutch sentence" : "Choose the correct translation";
  }
  if (style === "typing") {
    return toDutch ? "Translate to Dutch" : "Type the English translation";
  }
  return "Flashcard — flip, then rate yourself";
}

function toQuestion(card: Card, category: Category, style: LearningStyle): Question {
  const base = {
    id: `${card.id}-${style}`,
    style,
    category,
    instruction: instructionFor(category, style),
    answer: card.answer,
    alternates: card.alternates,
    flashFront: card.display,
    flashBack: card.answer,
    explanation: card.explanation,
  };

  if (style === "multiple-choice") {
    return { ...base, prompt: card.display, options: makeOptions(card.answer, card.pool) };
  }
  if (style === "audio") {
    return { ...base, prompt: "🔊 Press play to listen", audioText: card.audioText };
  }
  // typing & flashcard
  return { ...base, prompt: card.display };
}

/**
 * Build a shuffled practice session for a level + category, mixing the
 * selected learning styles randomly across questions.
 */
export function buildQuiz(
  level: A1Level,
  category: Category,
  styles: LearningStyle[],
): Question[] {
  if (styles.length === 0) return [];
  const cards = sample(buildCards(level, category), SESSION_SIZE);
  return cards.map((card) => {
    const style = styles[Math.floor(Math.random() * styles.length)];
    return toQuestion(card, category, style);
  });
}
