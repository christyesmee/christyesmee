import type { A1Level } from "../types";

// A1 — Level 9: Daily routine.
const level09: A1Level = {
  number: 9,
  topic: "Daily routine",
  vocab: [
    { dutch: "ochtend", english: "morning", article: "de" },
    { dutch: "middag", english: "afternoon", article: "de" },
    { dutch: "avond", english: "evening", article: "de" },
    { dutch: "nacht", english: "night", article: "de" },
    { dutch: "wekker", english: "alarm clock", article: "de" },
    { dutch: "douche", english: "shower", article: "de" },
    { dutch: "tandenborstel", english: "toothbrush", article: "de" },
    { dutch: "handdoek", english: "towel", article: "de" },
    { dutch: "zeep", english: "soap", article: "de" },
    { dutch: "kam", english: "comb", article: "de" },
    { dutch: "spiegel", english: "mirror", article: "de" },
    { dutch: "krant", english: "newspaper", article: "de" },
    { dutch: "tas", english: "bag", article: "de" },
    { dutch: "huiswerk", english: "homework", article: "het" },
    { dutch: "pauze", english: "break", article: "de" },
    { dutch: "vroeg", english: "early" },
    { dutch: "snel", english: "fast" },
    { dutch: "langzaam", english: "slow" },
    { dutch: "daarna", english: "afterwards" },
    { dutch: "eerst", english: "first" },
    { dutch: "dan", english: "then" },
    { dutch: "altijd", english: "always" },
    { dutch: "soms", english: "sometimes" },
    { dutch: "klaar", english: "ready" },
    { dutch: "elke", english: "every" },
  ],
  verbs: [
    {
      infinitive: "douchen",
      english: "to shower",
      forms: [
        { pronoun: "ik", dutch: "douche", english: "I shower" },
        { pronoun: "jij", dutch: "doucht", english: "you shower" },
        { pronoun: "hij", dutch: "doucht", english: "he showers" },
        { pronoun: "wij", dutch: "douchen", english: "we shower" },
      ],
    },
    {
      infinitive: "ontbijten",
      english: "to have breakfast",
      forms: [
        { pronoun: "ik", dutch: "ontbijt", english: "I have breakfast" },
        { pronoun: "jij", dutch: "ontbijt", english: "you have breakfast" },
        { pronoun: "hij", dutch: "ontbijt", english: "he has breakfast" },
        { pronoun: "wij", dutch: "ontbijten", english: "we have breakfast" },
      ],
    },
    {
      infinitive: "poetsen",
      english: "to brush",
      forms: [
        { pronoun: "ik", dutch: "poets", english: "I brush" },
        { pronoun: "jij", dutch: "poetst", english: "you brush" },
        { pronoun: "hij", dutch: "poetst", english: "he brushes" },
        { pronoun: "wij", dutch: "poetsen", english: "we brush" },
      ],
    },
    {
      infinitive: "worden",
      english: "to become",
      forms: [
        { pronoun: "ik", dutch: "word", english: "I become" },
        { pronoun: "jij", dutch: "wordt", english: "you become" },
        { pronoun: "hij", dutch: "wordt", english: "he becomes" },
        { pronoun: "wij", dutch: "worden", english: "we become" },
      ],
    },
    {
      infinitive: "vertrekken",
      english: "to leave",
      forms: [
        { pronoun: "ik", dutch: "vertrek", english: "I leave" },
        { pronoun: "jij", dutch: "vertrekt", english: "you leave" },
        { pronoun: "hij", dutch: "vertrekt", english: "he leaves" },
        { pronoun: "wij", dutch: "vertrekken", english: "we leave" },
      ],
    },
  ],
  grammar: [
    {
      id: "present-tense",
      name: "Word order — time first",
      explanation:
        "When a sentence starts with a time word, the verb stays second and the subject moves after it: 'Daarna ontbijt ik.'",
      sentences: [
        { dutch: "Ik douche eerst.", english: "I shower first." },
        { dutch: "Daarna ontbijt ik.", english: "Afterwards I have breakfast." },
        { dutch: "De ochtend is vroeg.", english: "The morning is early." },
        { dutch: "Ik ben klaar.", english: "I am ready." },
        { dutch: "Soms douche ik langzaam.", english: "Sometimes I shower slowly." },
        { dutch: "Dan vertrek ik.", english: "Then I leave." },
        { dutch: "Ik poets snel.", english: "I brush fast." },
      ],
    },
  ],
};

export default level09;
