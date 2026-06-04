import type { A1Level } from "../types";

// A1 — Level 7: Clothing.
const level07: A1Level = {
  number: 7,
  topic: "Clothing",
  vocab: [
    { dutch: "kleren", english: "clothes", article: "de" },
    { dutch: "shirt", english: "shirt", article: "het" },
    { dutch: "broek", english: "trousers", article: "de" },
    { dutch: "jas", english: "coat", article: "de" },
    { dutch: "jurk", english: "dress", article: "de" },
    { dutch: "rok", english: "skirt", article: "de" },
    { dutch: "trui", english: "sweater", article: "de" },
    { dutch: "sok", english: "sock", article: "de" },
    { dutch: "schoen", english: "shoe", article: "de" },
    { dutch: "laars", english: "boot", article: "de" },
    { dutch: "hoed", english: "hat", article: "de" },
    { dutch: "muts", english: "beanie", article: "de" },
    { dutch: "sjaal", english: "scarf", article: "de" },
    { dutch: "handschoen", english: "glove", article: "de" },
    { dutch: "pak", english: "suit", article: "het" },
    { dutch: "ondergoed", english: "underwear", article: "het" },
    { dutch: "riem", english: "belt", article: "de" },
    { dutch: "bril", english: "glasses", article: "de" },
    { dutch: "kleur", english: "colour", article: "de" },
    { dutch: "maat", english: "size", article: "de" },
    { dutch: "rood", english: "red" },
    { dutch: "blauw", english: "blue" },
    { dutch: "zwart", english: "black" },
    { dutch: "wit", english: "white" },
    { dutch: "nieuw", english: "new" },
  ],
  verbs: [
    {
      infinitive: "dragen",
      english: "to wear",
      forms: [
        { pronoun: "ik", dutch: "draag", english: "I wear" },
        { pronoun: "jij", dutch: "draagt", english: "you wear" },
        { pronoun: "hij", dutch: "draagt", english: "he wears" },
        { pronoun: "wij", dutch: "dragen", english: "we wear" },
      ],
    },
    {
      infinitive: "passen",
      english: "to fit",
      forms: [
        { pronoun: "ik", dutch: "pas", english: "I fit" },
        { pronoun: "jij", dutch: "past", english: "you fit" },
        { pronoun: "hij", dutch: "past", english: "he fits" },
        { pronoun: "wij", dutch: "passen", english: "we fit" },
      ],
    },
    {
      infinitive: "kopen",
      english: "to buy",
      forms: [
        { pronoun: "ik", dutch: "koop", english: "I buy" },
        { pronoun: "jij", dutch: "koopt", english: "you buy" },
        { pronoun: "hij", dutch: "koopt", english: "he buys" },
        { pronoun: "wij", dutch: "kopen", english: "we buy" },
      ],
    },
    {
      infinitive: "kiezen",
      english: "to choose",
      forms: [
        { pronoun: "ik", dutch: "kies", english: "I choose" },
        { pronoun: "jij", dutch: "kiest", english: "you choose" },
        { pronoun: "hij", dutch: "kiest", english: "he chooses" },
        { pronoun: "wij", dutch: "kiezen", english: "we choose" },
      ],
    },
    {
      infinitive: "wassen",
      english: "to wash",
      forms: [
        { pronoun: "ik", dutch: "was", english: "I wash" },
        { pronoun: "jij", dutch: "wast", english: "you wash" },
        { pronoun: "hij", dutch: "wast", english: "he washes" },
        { pronoun: "wij", dutch: "wassen", english: "we wash" },
      ],
    },
  ],
  grammar: [
    {
      id: "adjective-endings",
      name: "Adjective endings",
      explanation: "An adjective takes an -e before a noun: rood → een rode jas.",
      sentences: [
        { dutch: "De jas is rood.", english: "The coat is red." },
        { dutch: "Ik draag een rode jas.", english: "I wear a red coat." },
        { dutch: "De broek is blauw.", english: "The trousers are blue." },
        { dutch: "Ik koop een nieuwe trui.", english: "I buy a new sweater." },
        { dutch: "De zwarte schoen past.", english: "The black shoe fits." },
        { dutch: "Het shirt is wit.", english: "The shirt is white." },
        { dutch: "Ik draag een witte rok.", english: "I wear a white skirt." },
        { dutch: "Hij kiest de blauwe jurk.", english: "He chooses the blue dress." },
      ],
    },
  ],
};

export default level07;
