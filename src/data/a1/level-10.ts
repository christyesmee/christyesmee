import type { A1Level } from "../types";

// A1 — Level 10: Hobbies & free time.
const level10: A1Level = {
  number: 10,
  topic: "Hobbies & free time",
  vocab: [
    { dutch: "hobby", english: "hobby", article: "de" },
    { dutch: "sport", english: "sport", article: "de" },
    { dutch: "spel", english: "game", article: "het" },
    { dutch: "muziek", english: "music", article: "de" },
    { dutch: "lied", english: "song", article: "het" },
    { dutch: "gitaar", english: "guitar", article: "de" },
    { dutch: "piano", english: "piano", article: "de" },
    { dutch: "film", english: "movie", article: "de" },
    { dutch: "boek", english: "book", article: "het" },
    { dutch: "foto", english: "photo", article: "de" },
    { dutch: "camera", english: "camera", article: "de" },
    { dutch: "bal", english: "ball", article: "de" },
    { dutch: "zwembad", english: "swimming pool", article: "het" },
    { dutch: "dans", english: "dance", article: "de" },
    { dutch: "tekening", english: "drawing", article: "de" },
    { dutch: "vakantie", english: "holiday", article: "de" },
    { dutch: "weekend", english: "weekend", article: "het" },
    { dutch: "feest", english: "party", article: "het" },
    { dutch: "team", english: "team", article: "het" },
    { dutch: "leuk", english: "fun" },
    { dutch: "saai", english: "boring" },
    { dutch: "graag", english: "gladly" },
    { dutch: "buiten", english: "outside" },
    { dutch: "binnen", english: "inside" },
    { dutch: "vrij", english: "free" },
  ],
  verbs: [
    {
      infinitive: "spelen",
      english: "to play",
      forms: [
        { pronoun: "ik", dutch: "speel", english: "I play" },
        { pronoun: "jij", dutch: "speelt", english: "you play" },
        { pronoun: "hij", dutch: "speelt", english: "he plays" },
        { pronoun: "wij", dutch: "spelen", english: "we play" },
      ],
    },
    {
      infinitive: "zwemmen",
      english: "to swim",
      forms: [
        { pronoun: "ik", dutch: "zwem", english: "I swim" },
        { pronoun: "jij", dutch: "zwemt", english: "you swim" },
        { pronoun: "hij", dutch: "zwemt", english: "he swims" },
        { pronoun: "wij", dutch: "zwemmen", english: "we swim" },
      ],
    },
    {
      infinitive: "dansen",
      english: "to dance",
      forms: [
        { pronoun: "ik", dutch: "dans", english: "I dance" },
        { pronoun: "jij", dutch: "danst", english: "you dance" },
        { pronoun: "hij", dutch: "danst", english: "he dances" },
        { pronoun: "wij", dutch: "dansen", english: "we dance" },
      ],
    },
    {
      infinitive: "lezen",
      english: "to read",
      forms: [
        { pronoun: "ik", dutch: "lees", english: "I read" },
        { pronoun: "jij", dutch: "leest", english: "you read" },
        { pronoun: "hij", dutch: "leest", english: "he reads" },
        { pronoun: "wij", dutch: "lezen", english: "we read" },
      ],
    },
    {
      infinitive: "luisteren",
      english: "to listen",
      forms: [
        { pronoun: "ik", dutch: "luister", english: "I listen" },
        { pronoun: "jij", dutch: "luistert", english: "you listen" },
        { pronoun: "hij", dutch: "luistert", english: "he listens" },
        { pronoun: "wij", dutch: "luisteren", english: "we listen" },
      ],
    },
  ],
  grammar: [
    {
      id: "modal-verbs",
      name: "Modal verbs — kunnen, willen",
      explanation:
        "A modal verb (kunnen = can, willen = want) takes second place; the main verb goes to the end as an infinitive: 'Ik wil dansen.'",
      sentences: [
        { dutch: "Ik wil dansen.", english: "I want to dance." },
        { dutch: "Ik kan zwemmen.", english: "I can swim." },
        { dutch: "Wij willen spelen.", english: "We want to play." },
        { dutch: "Hij kan lezen.", english: "He can read." },
        { dutch: "Ik wil graag dansen.", english: "I would like to dance." },
        { dutch: "Het spel is leuk.", english: "The game is fun." },
        { dutch: "De film is saai.", english: "The movie is boring." },
        { dutch: "Ik wil graag zwemmen.", english: "I would like to swim." },
      ],
    },
  ],
};

export default level10;
