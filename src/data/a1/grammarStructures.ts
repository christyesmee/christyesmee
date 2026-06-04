// The 10 grammar (sentence-building) structures of A1.
// Each is introduced at a level and practised using only that level's words.

export interface GrammarStructureMeta {
  id: string;
  name: string;
  explanation: string;
}

export const A1_GRAMMAR_STRUCTURES: GrammarStructureMeta[] = [
  {
    id: "present-tense",
    name: "Present tense — simple statements",
    explanation:
      "Build basic sentences: subject + verb + rest. The verb takes the stem (+t for jij/hij/zij).",
  },
  {
    id: "articles",
    name: "de / het / een (articles)",
    explanation: "Choose the right article: 'de' or 'het' for 'the', and 'een' for 'a/an'.",
  },
  {
    id: "yes-no-questions",
    name: "Yes/no questions & word order",
    explanation: "Make a question by putting the verb first: 'Woon jij hier?'",
  },
  {
    id: "negation",
    name: "Negation — niet / geen",
    explanation: "Use 'niet' to negate verbs/adjectives and 'geen' to negate nouns.",
  },
  {
    id: "plurals",
    name: "Plurals — -en / -s",
    explanation: "Most nouns take -en in the plural; some take -s.",
  },
  {
    id: "possessives",
    name: "Possessives — mijn, jouw, …",
    explanation: "Say whose something is: mijn (my), jouw (your), zijn/haar (his/her).",
  },
  {
    id: "modal-verbs",
    name: "Modal verbs — kunnen, willen, moeten",
    explanation: "Combine a modal verb with an infinitive at the end of the sentence.",
  },
  {
    id: "perfect-tense",
    name: "Past tense — perfect (ge-…-t/-d)",
    explanation: "Talk about the past with hebben/zijn + a past participle (ge- + stem + t/d).",
  },
  {
    id: "simple-past",
    name: "Past tense — was / had",
    explanation: "Use the simple past of common verbs: was/waren, had/hadden.",
  },
  {
    id: "adjective-endings",
    name: "Adjective endings",
    explanation: "Adjectives often take an -e ending before a noun: 'de grote man'.",
  },
];
