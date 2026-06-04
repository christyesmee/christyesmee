// Core data model for the Dutch learning app (A1 focus).
// Explanations and translations target English-speaking learners.

export type CEFRLevel = "A1" | "A2" | "B1";

export type Category = "vocab" | "grammar" | "verbs";

export type LearningStyle = "typing" | "multiple-choice" | "audio" | "flashcard";

/** A single vocabulary word. */
export interface VocabItem {
  dutch: string;
  english: string;
  /** "de" or "het" for nouns; omit for non-nouns. */
  article?: "de" | "het";
}

/** One conjugated form of a verb, tested as its own question. */
export interface VerbForm {
  pronoun: string; // "ik", "jij", "hij/zij/het", "wij/jullie/zij"
  dutch: string; // "ga"
  english: string; // "I go"
}

/** A verb: the infinitive plus its conjugations. Each form is tested separately. */
export interface VerbItem {
  infinitive: string; // "gaan"
  english: string; // "to go"
  forms: VerbForm[];
}

/** A sentence pair used to practise a grammar structure. */
export interface GrammarSentence {
  dutch: string;
  english: string;
}

/**
 * A grammar structure (e.g. present tense). Sentences must only use the
 * vocabulary + verbs from the same level — no new content words.
 */
export interface GrammarStructure {
  id: string; // "present-tense"
  name: string;
  explanation: string;
  sentences: GrammarSentence[];
}

/** One A1 level (1..20), each with its own topic. */
export interface A1Level {
  number: number; // 1..20
  topic: string; // short English topic title
  vocab: VocabItem[]; // 25 words when fully authored
  verbs: VerbItem[]; // 5 verbs when fully authored
  grammar: GrammarStructure[]; // structures practised at this level
}

/** Whether a level has real content (vs. a planned placeholder). */
export function levelHasContent(level: A1Level): boolean {
  return level.vocab.length > 0 || level.verbs.length > 0 || level.grammar.length > 0;
}

/** Does a category within a level have content to practise? */
export function categoryHasContent(level: A1Level, category: Category): boolean {
  if (category === "vocab") return level.vocab.length > 0;
  if (category === "verbs") return level.verbs.length > 0;
  return level.grammar.length > 0;
}
