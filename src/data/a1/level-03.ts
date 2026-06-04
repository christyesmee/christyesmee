import type { A1Level } from "../types";

// A1 — Level 3: Numbers & time.
const level03: A1Level = {
  number: 3,
  topic: "Numbers & time",
  vocab: [
    { dutch: "nul", english: "zero" },
    { dutch: "één", english: "one" },
    { dutch: "twee", english: "two" },
    { dutch: "drie", english: "three" },
    { dutch: "vier", english: "four" },
    { dutch: "vijf", english: "five" },
    { dutch: "zes", english: "six" },
    { dutch: "zeven", english: "seven" },
    { dutch: "acht", english: "eight" },
    { dutch: "negen", english: "nine" },
    { dutch: "tien", english: "ten" },
    { dutch: "elf", english: "eleven" },
    { dutch: "twaalf", english: "twelve" },
    { dutch: "twintig", english: "twenty" },
    { dutch: "honderd", english: "hundred" },
    { dutch: "tijd", english: "time", article: "de" },
    { dutch: "uur", english: "hour", article: "het" },
    { dutch: "minuut", english: "minute", article: "de" },
    { dutch: "week", english: "week", article: "de" },
    { dutch: "maand", english: "month", article: "de" },
    { dutch: "jaar", english: "year", article: "het" },
    { dutch: "vandaag", english: "today" },
    { dutch: "morgen", english: "tomorrow" },
    { dutch: "nu", english: "now" },
    { dutch: "laat", english: "late" },
  ],
  verbs: [
    {
      infinitive: "tellen",
      english: "to count",
      forms: [
        { pronoun: "ik", dutch: "tel", english: "I count" },
        { pronoun: "jij", dutch: "telt", english: "you count" },
        { pronoun: "hij", dutch: "telt", english: "he counts" },
        { pronoun: "wij", dutch: "tellen", english: "we count" },
      ],
    },
    {
      infinitive: "beginnen",
      english: "to begin",
      forms: [
        { pronoun: "ik", dutch: "begin", english: "I begin" },
        { pronoun: "jij", dutch: "begint", english: "you begin" },
        { pronoun: "hij", dutch: "begint", english: "he begins" },
        { pronoun: "wij", dutch: "beginnen", english: "we begin" },
      ],
    },
    {
      infinitive: "wachten",
      english: "to wait",
      forms: [
        { pronoun: "ik", dutch: "wacht", english: "I wait" },
        { pronoun: "jij", dutch: "wacht", english: "you wait" },
        { pronoun: "hij", dutch: "wacht", english: "he waits" },
        { pronoun: "wij", dutch: "wachten", english: "we wait" },
      ],
    },
    {
      infinitive: "duren",
      english: "to last",
      forms: [
        { pronoun: "ik", dutch: "duur", english: "I last" },
        { pronoun: "jij", dutch: "duurt", english: "you last" },
        { pronoun: "hij", dutch: "duurt", english: "he lasts" },
        { pronoun: "wij", dutch: "duren", english: "we last" },
      ],
    },
    {
      infinitive: "komen",
      english: "to come",
      forms: [
        { pronoun: "ik", dutch: "kom", english: "I come" },
        { pronoun: "jij", dutch: "komt", english: "you come" },
        { pronoun: "hij", dutch: "komt", english: "he comes" },
        { pronoun: "wij", dutch: "komen", english: "we come" },
      ],
    },
  ],
  grammar: [
    {
      id: "present-tense",
      name: "Telling time & present tense",
      explanation: "Use 'het is …' for the time, and the present tense for what happens now.",
      sentences: [
        { dutch: "Het is tien uur.", english: "It is ten o'clock." },
        { dutch: "Ik tel tot twintig.", english: "I count to twenty." },
        { dutch: "Wij beginnen nu.", english: "We begin now." },
        { dutch: "Ik wacht een uur.", english: "I wait an hour." },
        { dutch: "Het is vandaag laat.", english: "It is late today." },
        { dutch: "Hij komt morgen.", english: "He comes tomorrow." },
        { dutch: "Ik kom nu.", english: "I come now." },
      ],
    },
  ],
};

export default level03;
