import type { A1Level } from "../types";

// A1 — Level 6: The city & places.
const level06: A1Level = {
  number: 6,
  topic: "The city & places",
  vocab: [
    { dutch: "winkel", english: "shop", article: "de" },
    { dutch: "markt", english: "market", article: "de" },
    { dutch: "weg", english: "road", article: "de" },
    { dutch: "plein", english: "square", article: "het" },
    { dutch: "station", english: "station", article: "het" },
    { dutch: "kerk", english: "church", article: "de" },
    { dutch: "museum", english: "museum", article: "het" },
    { dutch: "park", english: "park", article: "het" },
    { dutch: "ziekenhuis", english: "hospital", article: "het" },
    { dutch: "bibliotheek", english: "library", article: "de" },
    { dutch: "restaurant", english: "restaurant", article: "het" },
    { dutch: "café", english: "café", article: "het" },
    { dutch: "bank", english: "bank", article: "de" },
    { dutch: "supermarkt", english: "supermarket", article: "de" },
    { dutch: "brug", english: "bridge", article: "de" },
    { dutch: "hotel", english: "hotel", article: "het" },
    { dutch: "bioscoop", english: "cinema", article: "de" },
    { dutch: "centrum", english: "centre", article: "het" },
    { dutch: "buurt", english: "neighbourhood", article: "de" },
    { dutch: "gebouw", english: "building", article: "het" },
    { dutch: "fiets", english: "bicycle", article: "de" },
    { dutch: "dichtbij", english: "nearby" },
    { dutch: "ver", english: "far" },
    { dutch: "links", english: "left" },
    { dutch: "rechts", english: "right" },
  ],
  verbs: [
    {
      infinitive: "gaan",
      english: "to go",
      forms: [
        { pronoun: "ik", dutch: "ga", english: "I go" },
        { pronoun: "jij", dutch: "gaat", english: "you go" },
        { pronoun: "hij", dutch: "gaat", english: "he goes" },
        { pronoun: "wij", dutch: "gaan", english: "we go" },
      ],
    },
    {
      infinitive: "lopen",
      english: "to walk",
      forms: [
        { pronoun: "ik", dutch: "loop", english: "I walk" },
        { pronoun: "jij", dutch: "loopt", english: "you walk" },
        { pronoun: "hij", dutch: "loopt", english: "he walks" },
        { pronoun: "wij", dutch: "lopen", english: "we walk" },
      ],
    },
    {
      infinitive: "fietsen",
      english: "to cycle",
      forms: [
        { pronoun: "ik", dutch: "fiets", english: "I cycle" },
        { pronoun: "jij", dutch: "fietst", english: "you cycle" },
        { pronoun: "hij", dutch: "fietst", english: "he cycles" },
        { pronoun: "wij", dutch: "fietsen", english: "we cycle" },
      ],
    },
    {
      infinitive: "vinden",
      english: "to find",
      forms: [
        { pronoun: "ik", dutch: "vind", english: "I find" },
        { pronoun: "jij", dutch: "vindt", english: "you find" },
        { pronoun: "hij", dutch: "vindt", english: "he finds" },
        { pronoun: "wij", dutch: "vinden", english: "we find" },
      ],
    },
    {
      infinitive: "parkeren",
      english: "to park",
      forms: [
        { pronoun: "ik", dutch: "parkeer", english: "I park" },
        { pronoun: "jij", dutch: "parkeert", english: "you park" },
        { pronoun: "hij", dutch: "parkeert", english: "he parks" },
        { pronoun: "wij", dutch: "parkeren", english: "we park" },
      ],
    },
  ],
  grammar: [
    {
      id: "yes-no-questions",
      name: "Yes/no questions & word order",
      explanation: "Make a yes/no question by putting the verb first: 'Ga jij naar de winkel?'",
      sentences: [
        { dutch: "Ik ga naar de markt.", english: "I go to the market." },
        { dutch: "Wij lopen naar het park.", english: "We walk to the park." },
        { dutch: "Ik fiets naar het station.", english: "I cycle to the station." },
        { dutch: "Het museum is dichtbij.", english: "The museum is nearby." },
        { dutch: "De kerk is ver.", english: "The church is far." },
        { dutch: "Ga jij naar de winkel?", english: "Do you go to the shop?" },
        { dutch: "Fiets jij naar de markt?", english: "Do you cycle to the market?" },
        { dutch: "Ik parkeer de fiets.", english: "I park the bicycle." },
      ],
    },
  ],
};

export default level06;
