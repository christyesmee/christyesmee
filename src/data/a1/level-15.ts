import type { A1Level } from "../types";

// A1 — Level 15: Nature & animals.
const level15: A1Level = {
  number: 15,
  topic: "Nature & animals",
  vocab: [
    { dutch: "natuur", english: "nature", article: "de" },
    { dutch: "boom", english: "tree", article: "de" },
    { dutch: "bloem", english: "flower", article: "de" },
    { dutch: "gras", english: "grass", article: "het" },
    { dutch: "blad", english: "leaf", article: "het" },
    { dutch: "plant", english: "plant", article: "de" },
    { dutch: "bos", english: "forest", article: "het" },
    { dutch: "berg", english: "mountain", article: "de" },
    { dutch: "rivier", english: "river", article: "de" },
    { dutch: "zee", english: "sea", article: "de" },
    { dutch: "meer", english: "lake", article: "het" },
    { dutch: "strand", english: "beach", article: "het" },
    { dutch: "veld", english: "field", article: "het" },
    { dutch: "vogel", english: "bird", article: "de" },
    { dutch: "koe", english: "cow", article: "de" },
    { dutch: "paard", english: "horse", article: "het" },
    { dutch: "schaap", english: "sheep", article: "het" },
    { dutch: "varken", english: "pig", article: "het" },
    { dutch: "kip", english: "chicken", article: "de" },
    { dutch: "muis", english: "mouse", article: "de" },
    { dutch: "konijn", english: "rabbit", article: "het" },
    { dutch: "spin", english: "spider", article: "de" },
    { dutch: "bij", english: "bee", article: "de" },
    { dutch: "vlinder", english: "butterfly", article: "de" },
    { dutch: "groen", english: "green" },
  ],
  verbs: [
    {
      infinitive: "groeien",
      english: "to grow",
      forms: [
        { pronoun: "ik", dutch: "groei", english: "I grow" },
        { pronoun: "jij", dutch: "groeit", english: "you grow" },
        { pronoun: "hij", dutch: "groeit", english: "he grows" },
        { pronoun: "wij", dutch: "groeien", english: "we grow" },
      ],
    },
    {
      infinitive: "bloeien",
      english: "to bloom",
      forms: [
        { pronoun: "ik", dutch: "bloei", english: "I bloom" },
        { pronoun: "jij", dutch: "bloeit", english: "you bloom" },
        { pronoun: "hij", dutch: "bloeit", english: "he blooms" },
        { pronoun: "wij", dutch: "bloeien", english: "we bloom" },
      ],
    },
    {
      infinitive: "klimmen",
      english: "to climb",
      forms: [
        { pronoun: "ik", dutch: "klim", english: "I climb" },
        { pronoun: "jij", dutch: "klimt", english: "you climb" },
        { pronoun: "hij", dutch: "klimt", english: "he climbs" },
        { pronoun: "wij", dutch: "klimmen", english: "we climb" },
      ],
    },
    {
      infinitive: "springen",
      english: "to jump",
      forms: [
        { pronoun: "ik", dutch: "spring", english: "I jump" },
        { pronoun: "jij", dutch: "springt", english: "you jump" },
        { pronoun: "hij", dutch: "springt", english: "he jumps" },
        { pronoun: "wij", dutch: "springen", english: "we jump" },
      ],
    },
    {
      infinitive: "vangen",
      english: "to catch",
      forms: [
        { pronoun: "ik", dutch: "vang", english: "I catch" },
        { pronoun: "jij", dutch: "vangt", english: "you catch" },
        { pronoun: "hij", dutch: "vangt", english: "he catches" },
        { pronoun: "wij", dutch: "vangen", english: "we catch" },
      ],
    },
  ],
  grammar: [
    {
      id: "plurals",
      name: "Plurals — -en / -s",
      explanation: "Most nouns add -en in the plural (boom → bomen); some add -s (vogel → vogels).",
      sentences: [
        { dutch: "één boom, twee bomen", english: "one tree, two trees" },
        { dutch: "één bloem, twee bloemen", english: "one flower, two flowers" },
        { dutch: "één vogel, twee vogels", english: "one bird, two birds" },
        { dutch: "één koe, twee koeien", english: "one cow, two cows" },
        { dutch: "De bomen zijn groen.", english: "The trees are green." },
        { dutch: "De bloemen bloeien.", english: "The flowers bloom." },
        { dutch: "De planten groeien.", english: "The plants grow." },
        { dutch: "De konijnen springen.", english: "The rabbits jump." },
      ],
    },
  ],
};

export default level15;
