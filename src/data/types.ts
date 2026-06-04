// Core data model for the Dutch learning app.
// Explanations and translations are aimed at English-speaking learners.

export type CEFRLevel = "A1" | "A2" | "B1";

/** A single vocabulary entry. */
export interface VocabItem {
  dutch: string;
  english: string;
  /** Dutch articles: "de" or "het" for nouns. Omit for non-nouns. */
  article?: "de" | "het";
  example?: string;
  exampleTranslation?: string;
}

/** One conjugated form of a verb (pronoun + form). */
export interface VerbForm {
  pronoun: string; // e.g. "ik", "jij / hij / zij"
  form: string; // e.g. "werk", "werkt"
  /** Short note on how the form is built, e.g. "stem", "stem + t". */
  note?: string;
}

/**
 * A verb broken down into stem + endings, which is the heart of how Dutch
 * present-tense conjugation works (infinitive minus -en = stem).
 */
export interface VerbConjugation {
  infinitive: string; // "werken"
  english: string; // "to work"
  stem: string; // "werk"
  forms: VerbForm[];
  irregular?: boolean;
}

/** A grammar rule with explanation and worked examples. */
export interface GrammarRule {
  title: string;
  explanation: string;
  examples: { dutch: string; english: string }[];
}

export type ExerciseType = "multiple-choice" | "fill-blank" | "translate";

/** A single practice question. */
export interface Exercise {
  type: ExerciseType;
  /** The question or sentence shown. Use "___" to mark a blank. */
  question: string;
  /** Optional English hint / context. */
  hint?: string;
  /** Options for multiple-choice questions. */
  options?: string[];
  answer: string;
  explanation?: string;
}

/** A full lesson = one of the 10 levels within a CEFR level. */
export interface Lesson {
  id: string; // "a1-01"
  level: CEFRLevel;
  number: number; // 1..10
  title: string;
  theme: string; // short English description of the theme
  vocabulary: VocabItem[];
  grammar: GrammarRule[];
  verbs: VerbConjugation[];
  exercises: Exercise[];
}
