import type { A1Level } from "../types";

// A1 — Level 18: Directions & locations.
const level18: A1Level = {
  number: 18,
  topic: "Directions & locations",
  vocab: [
    { dutch: "richting", english: "direction", article: "de" },
    { dutch: "hoek", english: "corner", article: "de" },
    { dutch: "kruising", english: "crossroads", article: "de" },
    { dutch: "stoplicht", english: "traffic light", article: "het" },
    { dutch: "ingang", english: "entrance", article: "de" },
    { dutch: "uitgang", english: "exit", article: "de" },
    { dutch: "verkeersbord", english: "road sign", article: "het" },
    { dutch: "afstand", english: "distance", article: "de" },
    { dutch: "plek", english: "spot", article: "de" },
    { dutch: "noorden", english: "north", article: "het" },
    { dutch: "zuiden", english: "south", article: "het" },
    { dutch: "oosten", english: "east", article: "het" },
    { dutch: "westen", english: "west", article: "het" },
    { dutch: "rotonde", english: "roundabout", article: "de" },
    { dutch: "stoep", english: "sidewalk", article: "de" },
    { dutch: "overkant", english: "other side", article: "de" },
    { dutch: "einde", english: "end", article: "het" },
    { dutch: "begin", english: "beginning", article: "het" },
    { dutch: "rechtdoor", english: "straight ahead" },
    { dutch: "daar", english: "there" },
    { dutch: "naast", english: "next to" },
    { dutch: "tussen", english: "between" },
    { dutch: "achter", english: "behind" },
    { dutch: "voor", english: "in front of" },
    { dutch: "onder", english: "under" },
  ],
  verbs: [
    {
      infinitive: "draaien",
      english: "to turn",
      forms: [
        { pronoun: "ik", dutch: "draai", english: "I turn" },
        { pronoun: "jij", dutch: "draait", english: "you turn" },
        { pronoun: "hij", dutch: "draait", english: "he turns" },
        { pronoun: "wij", dutch: "draaien", english: "we turn" },
      ],
    },
    {
      infinitive: "volgen",
      english: "to follow",
      forms: [
        { pronoun: "ik", dutch: "volg", english: "I follow" },
        { pronoun: "jij", dutch: "volgt", english: "you follow" },
        { pronoun: "hij", dutch: "volgt", english: "he follows" },
        { pronoun: "wij", dutch: "volgen", english: "we follow" },
      ],
    },
    {
      infinitive: "wijzen",
      english: "to point",
      forms: [
        { pronoun: "ik", dutch: "wijs", english: "I point" },
        { pronoun: "jij", dutch: "wijst", english: "you point" },
        { pronoun: "hij", dutch: "wijst", english: "he points" },
        { pronoun: "wij", dutch: "wijzen", english: "we point" },
      ],
    },
    {
      infinitive: "rennen",
      english: "to run",
      forms: [
        { pronoun: "ik", dutch: "ren", english: "I run" },
        { pronoun: "jij", dutch: "rent", english: "you run" },
        { pronoun: "hij", dutch: "rent", english: "he runs" },
        { pronoun: "wij", dutch: "rennen", english: "we run" },
      ],
    },
    {
      infinitive: "keren",
      english: "to turn around",
      forms: [
        { pronoun: "ik", dutch: "keer", english: "I turn around" },
        { pronoun: "jij", dutch: "keert", english: "you turn around" },
        { pronoun: "hij", dutch: "keert", english: "he turns around" },
        { pronoun: "wij", dutch: "keren", english: "we turn around" },
      ],
    },
  ],
  grammar: [
    {
      id: "present-tense",
      name: "Prepositions of place",
      explanation: "Use words like naast, tussen, achter, voor and onder to say where something is.",
      sentences: [
        { dutch: "De ingang is daar.", english: "The entrance is there." },
        { dutch: "De uitgang is naast de ingang.", english: "The exit is next to the entrance." },
        { dutch: "Het verkeersbord is op de hoek.", english: "The road sign is on the corner." },
        { dutch: "Ik volg de richting.", english: "I follow the direction." },
        { dutch: "Ik ren rechtdoor.", english: "I run straight ahead." },
        { dutch: "De stoep is achter de rotonde.", english: "The sidewalk is behind the roundabout." },
        { dutch: "Het stoplicht is voor de kruising.", english: "The traffic light is in front of the crossroads." },
        { dutch: "Ik wijs naar het noorden.", english: "I point to the north." },
      ],
    },
  ],
};

export default level18;
