import type { A1Level } from "../types";

// A1 — Level 14: Weather & seasons.
const level14: A1Level = {
  number: 14,
  topic: "Weather & seasons",
  vocab: [
    { dutch: "weer", english: "weather", article: "het" },
    { dutch: "zon", english: "sun", article: "de" },
    { dutch: "regen", english: "rain", article: "de" },
    { dutch: "wind", english: "wind", article: "de" },
    { dutch: "sneeuw", english: "snow", article: "de" },
    { dutch: "wolk", english: "cloud", article: "de" },
    { dutch: "lucht", english: "sky", article: "de" },
    { dutch: "onweer", english: "thunderstorm", article: "het" },
    { dutch: "temperatuur", english: "temperature", article: "de" },
    { dutch: "graad", english: "degree", article: "de" },
    { dutch: "lente", english: "spring", article: "de" },
    { dutch: "zomer", english: "summer", article: "de" },
    { dutch: "herfst", english: "autumn", article: "de" },
    { dutch: "winter", english: "winter", article: "de" },
    { dutch: "seizoen", english: "season", article: "het" },
    { dutch: "mist", english: "fog", article: "de" },
    { dutch: "ijs", english: "ice", article: "het" },
    { dutch: "bui", english: "shower", article: "de" },
    { dutch: "paraplu", english: "umbrella", article: "de" },
    { dutch: "regenjas", english: "raincoat", article: "de" },
    { dutch: "koud", english: "cold" },
    { dutch: "heet", english: "hot" },
    { dutch: "nat", english: "wet" },
    { dutch: "droog", english: "dry" },
    { dutch: "zonnig", english: "sunny" },
  ],
  verbs: [
    {
      infinitive: "kijken",
      english: "to look",
      forms: [
        { pronoun: "ik", dutch: "kijk", english: "I look" },
        { pronoun: "jij", dutch: "kijkt", english: "you look" },
        { pronoun: "hij", dutch: "kijkt", english: "he looks" },
        { pronoun: "wij", dutch: "kijken", english: "we look" },
      ],
    },
    {
      infinitive: "blijven",
      english: "to stay",
      forms: [
        { pronoun: "ik", dutch: "blijf", english: "I stay" },
        { pronoun: "jij", dutch: "blijft", english: "you stay" },
        { pronoun: "hij", dutch: "blijft", english: "he stays" },
        { pronoun: "wij", dutch: "blijven", english: "we stay" },
      ],
    },
    {
      infinitive: "vallen",
      english: "to fall",
      forms: [
        { pronoun: "ik", dutch: "val", english: "I fall" },
        { pronoun: "jij", dutch: "valt", english: "you fall" },
        { pronoun: "hij", dutch: "valt", english: "he falls" },
        { pronoun: "wij", dutch: "vallen", english: "we fall" },
      ],
    },
    {
      infinitive: "veranderen",
      english: "to change",
      forms: [
        { pronoun: "ik", dutch: "verander", english: "I change" },
        { pronoun: "jij", dutch: "verandert", english: "you change" },
        { pronoun: "hij", dutch: "verandert", english: "he changes" },
        { pronoun: "wij", dutch: "veranderen", english: "we change" },
      ],
    },
    {
      infinitive: "schijnen",
      english: "to shine",
      forms: [
        { pronoun: "ik", dutch: "schijn", english: "I shine" },
        { pronoun: "jij", dutch: "schijnt", english: "you shine" },
        { pronoun: "hij", dutch: "schijnt", english: "he shines" },
        { pronoun: "wij", dutch: "schijnen", english: "we shine" },
      ],
    },
  ],
  grammar: [
    {
      id: "present-tense",
      name: "The weather — het is …",
      explanation: "Talk about the weather with 'het is …' plus an adjective.",
      sentences: [
        { dutch: "Het is koud.", english: "It is cold." },
        { dutch: "De zon schijnt.", english: "The sun shines." },
        { dutch: "Het is zonnig.", english: "It is sunny." },
        { dutch: "De regen valt.", english: "The rain falls." },
        { dutch: "De winter is koud.", english: "The winter is cold." },
        { dutch: "Het is heet.", english: "It is hot." },
        { dutch: "De sneeuw valt.", english: "The snow falls." },
        { dutch: "Het weer verandert.", english: "The weather changes." },
      ],
    },
  ],
};

export default level14;
