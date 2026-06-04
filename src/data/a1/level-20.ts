import type { A1Level } from "../types";

// A1 — Level 20: Everyday conversations.
const level20: A1Level = {
  number: 20,
  topic: "Everyday conversations",
  vocab: [
    { dutch: "gesprek", english: "conversation", article: "het" },
    { dutch: "vraag", english: "question", article: "de" },
    { dutch: "antwoord", english: "answer", article: "het" },
    { dutch: "groet", english: "greeting", article: "de" },
    { dutch: "woord", english: "word", article: "het" },
    { dutch: "zin", english: "sentence", article: "de" },
    { dutch: "taal", english: "language", article: "de" },
    { dutch: "Nederlands", english: "Dutch", article: "het" },
    { dutch: "mening", english: "opinion", article: "de" },
    { dutch: "alsjeblieft", english: "please" },
    { dutch: "bedankt", english: "thanks" },
    { dutch: "sorry", english: "sorry" },
    { dutch: "misschien", english: "maybe" },
    { dutch: "natuurlijk", english: "of course" },
    { dutch: "zeker", english: "certainly" },
    { dutch: "echt", english: "really" },
    { dutch: "helaas", english: "unfortunately" },
    { dutch: "gelukkig", english: "fortunately" },
    { dutch: "inderdaad", english: "indeed" },
    { dutch: "trouwens", english: "by the way" },
    { dutch: "duidelijk", english: "clear" },
    { dutch: "belangrijk", english: "important" },
    { dutch: "hetzelfde", english: "the same" },
    { dutch: "anders", english: "different" },
    { dutch: "goed", english: "good" },
  ],
  verbs: [
    {
      infinitive: "praten",
      english: "to talk",
      forms: [
        { pronoun: "ik", dutch: "praat", english: "I talk" },
        { pronoun: "jij", dutch: "praat", english: "you talk" },
        { pronoun: "hij", dutch: "praat", english: "he talks" },
        { pronoun: "wij", dutch: "praten", english: "we talk" },
      ],
    },
    {
      infinitive: "zeggen",
      english: "to say",
      forms: [
        { pronoun: "ik", dutch: "zeg", english: "I say" },
        { pronoun: "jij", dutch: "zegt", english: "you say" },
        { pronoun: "hij", dutch: "zegt", english: "he says" },
        { pronoun: "wij", dutch: "zeggen", english: "we say" },
      ],
    },
    {
      infinitive: "antwoorden",
      english: "to answer",
      forms: [
        { pronoun: "ik", dutch: "antwoord", english: "I answer" },
        { pronoun: "jij", dutch: "antwoordt", english: "you answer" },
        { pronoun: "hij", dutch: "antwoordt", english: "he answers" },
        { pronoun: "wij", dutch: "antwoorden", english: "we answer" },
      ],
    },
    {
      infinitive: "begrijpen",
      english: "to understand",
      forms: [
        { pronoun: "ik", dutch: "begrijp", english: "I understand" },
        { pronoun: "jij", dutch: "begrijpt", english: "you understand" },
        { pronoun: "hij", dutch: "begrijpt", english: "he understands" },
        { pronoun: "wij", dutch: "begrijpen", english: "we understand" },
      ],
    },
    {
      infinitive: "herhalen",
      english: "to repeat",
      forms: [
        { pronoun: "ik", dutch: "herhaal", english: "I repeat" },
        { pronoun: "jij", dutch: "herhaalt", english: "you repeat" },
        { pronoun: "hij", dutch: "herhaalt", english: "he repeats" },
        { pronoun: "wij", dutch: "herhalen", english: "we repeat" },
      ],
    },
  ],
  grammar: [
    {
      id: "present-tense",
      name: "Putting it together",
      explanation: "Mix statements and questions to hold a simple conversation.",
      sentences: [
        { dutch: "Ik praat Nederlands.", english: "I speak Dutch." },
        { dutch: "Ik begrijp het niet.", english: "I don't understand it." },
        { dutch: "De vraag is duidelijk.", english: "The question is clear." },
        { dutch: "Het antwoord is belangrijk.", english: "The answer is important." },
        { dutch: "Ik herhaal de zin.", english: "I repeat the sentence." },
        { dutch: "Praat jij Nederlands?", english: "Do you speak Dutch?" },
        { dutch: "Het woord is hetzelfde.", english: "The word is the same." },
        { dutch: "Ik zeg bedankt.", english: "I say thanks." },
      ],
    },
  ],
};

export default level20;
