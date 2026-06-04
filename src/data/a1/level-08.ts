import type { A1Level } from "../types";

// A1 — Level 8: Body & health.
const level08: A1Level = {
  number: 8,
  topic: "Body & health",
  vocab: [
    { dutch: "lichaam", english: "body", article: "het" },
    { dutch: "hoofd", english: "head", article: "het" },
    { dutch: "haar", english: "hair", article: "het" },
    { dutch: "oog", english: "eye", article: "het" },
    { dutch: "oor", english: "ear", article: "het" },
    { dutch: "neus", english: "nose", article: "de" },
    { dutch: "mond", english: "mouth", article: "de" },
    { dutch: "tand", english: "tooth", article: "de" },
    { dutch: "hand", english: "hand", article: "de" },
    { dutch: "arm", english: "arm", article: "de" },
    { dutch: "been", english: "leg", article: "het" },
    { dutch: "voet", english: "foot", article: "de" },
    { dutch: "vinger", english: "finger", article: "de" },
    { dutch: "rug", english: "back", article: "de" },
    { dutch: "buik", english: "belly", article: "de" },
    { dutch: "hart", english: "heart", article: "het" },
    { dutch: "keel", english: "throat", article: "de" },
    { dutch: "huid", english: "skin", article: "de" },
    { dutch: "dokter", english: "doctor", article: "de" },
    { dutch: "pijn", english: "pain", article: "de" },
    { dutch: "koorts", english: "fever", article: "de" },
    { dutch: "ziek", english: "sick" },
    { dutch: "gezond", english: "healthy" },
    { dutch: "moe", english: "tired" },
    { dutch: "beter", english: "better" },
  ],
  verbs: [
    {
      infinitive: "voelen",
      english: "to feel",
      forms: [
        { pronoun: "ik", dutch: "voel", english: "I feel" },
        { pronoun: "jij", dutch: "voelt", english: "you feel" },
        { pronoun: "hij", dutch: "voelt", english: "he feels" },
        { pronoun: "wij", dutch: "voelen", english: "we feel" },
      ],
    },
    {
      infinitive: "doen",
      english: "to do",
      forms: [
        { pronoun: "ik", dutch: "doe", english: "I do" },
        { pronoun: "jij", dutch: "doet", english: "you do" },
        { pronoun: "hij", dutch: "doet", english: "he does" },
        { pronoun: "wij", dutch: "doen", english: "we do" },
      ],
    },
    {
      infinitive: "rusten",
      english: "to rest",
      forms: [
        { pronoun: "ik", dutch: "rust", english: "I rest" },
        { pronoun: "jij", dutch: "rust", english: "you rest" },
        { pronoun: "hij", dutch: "rust", english: "he rests" },
        { pronoun: "wij", dutch: "rusten", english: "we rest" },
      ],
    },
    {
      infinitive: "liggen",
      english: "to lie",
      forms: [
        { pronoun: "ik", dutch: "lig", english: "I lie" },
        { pronoun: "jij", dutch: "ligt", english: "you lie" },
        { pronoun: "hij", dutch: "ligt", english: "he lies" },
        { pronoun: "wij", dutch: "liggen", english: "we lie" },
      ],
    },
    {
      infinitive: "ademen",
      english: "to breathe",
      forms: [
        { pronoun: "ik", dutch: "adem", english: "I breathe" },
        { pronoun: "jij", dutch: "ademt", english: "you breathe" },
        { pronoun: "hij", dutch: "ademt", english: "he breathes" },
        { pronoun: "wij", dutch: "ademen", english: "we breathe" },
      ],
    },
  ],
  grammar: [
    {
      id: "negation",
      name: "Negation — niet",
      explanation: "Use 'niet' to negate a verb or an adjective: 'Ik ben niet ziek.'",
      sentences: [
        { dutch: "Ik ben ziek.", english: "I am sick." },
        { dutch: "Ik ben niet gezond.", english: "I am not healthy." },
        { dutch: "Mijn hoofd doet pijn.", english: "My head hurts." },
        { dutch: "Ik voel mijn hart.", english: "I feel my heart." },
        { dutch: "Hij is moe.", english: "He is tired." },
        { dutch: "Ik ben niet moe.", english: "I am not tired." },
        { dutch: "Mijn keel doet pijn.", english: "My throat hurts." },
        { dutch: "Ik voel mijn been.", english: "I feel my leg." },
      ],
    },
  ],
};

export default level08;
