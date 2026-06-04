import type { A1Level } from "../types";

// A1 — Level 11: Work & school.
const level11: A1Level = {
  number: 11,
  topic: "Work & school",
  vocab: [
    { dutch: "baan", english: "job", article: "de" },
    { dutch: "kantoor", english: "office", article: "het" },
    { dutch: "baas", english: "boss", article: "de" },
    { dutch: "collega", english: "colleague", article: "de" },
    { dutch: "vergadering", english: "meeting", article: "de" },
    { dutch: "computer", english: "computer", article: "de" },
    { dutch: "e-mail", english: "email", article: "de" },
    { dutch: "project", english: "project", article: "het" },
    { dutch: "salaris", english: "salary", article: "het" },
    { dutch: "leraar", english: "teacher", article: "de" },
    { dutch: "leerling", english: "pupil", article: "de" },
    { dutch: "student", english: "student", article: "de" },
    { dutch: "klas", english: "class", article: "de" },
    { dutch: "lokaal", english: "classroom", article: "het" },
    { dutch: "examen", english: "exam", article: "het" },
    { dutch: "cijfer", english: "grade", article: "het" },
    { dutch: "les", english: "lesson", article: "de" },
    { dutch: "universiteit", english: "university", article: "de" },
    { dutch: "opleiding", english: "training", article: "de" },
    { dutch: "pen", english: "pen", article: "de" },
    { dutch: "potlood", english: "pencil", article: "het" },
    { dutch: "papier", english: "paper", article: "het" },
    { dutch: "druk", english: "busy" },
    { dutch: "makkelijk", english: "easy" },
    { dutch: "moeilijk", english: "difficult" },
  ],
  verbs: [
    {
      infinitive: "studeren",
      english: "to study",
      forms: [
        { pronoun: "ik", dutch: "studeer", english: "I study" },
        { pronoun: "jij", dutch: "studeert", english: "you study" },
        { pronoun: "hij", dutch: "studeert", english: "he studies" },
        { pronoun: "wij", dutch: "studeren", english: "we study" },
      ],
    },
    {
      infinitive: "leren",
      english: "to learn",
      forms: [
        { pronoun: "ik", dutch: "leer", english: "I learn" },
        { pronoun: "jij", dutch: "leert", english: "you learn" },
        { pronoun: "hij", dutch: "leert", english: "he learns" },
        { pronoun: "wij", dutch: "leren", english: "we learn" },
      ],
    },
    {
      infinitive: "schrijven",
      english: "to write",
      forms: [
        { pronoun: "ik", dutch: "schrijf", english: "I write" },
        { pronoun: "jij", dutch: "schrijft", english: "you write" },
        { pronoun: "hij", dutch: "schrijft", english: "he writes" },
        { pronoun: "wij", dutch: "schrijven", english: "we write" },
      ],
    },
    {
      infinitive: "vragen",
      english: "to ask",
      forms: [
        { pronoun: "ik", dutch: "vraag", english: "I ask" },
        { pronoun: "jij", dutch: "vraagt", english: "you ask" },
        { pronoun: "hij", dutch: "vraagt", english: "he asks" },
        { pronoun: "wij", dutch: "vragen", english: "we ask" },
      ],
    },
    {
      infinitive: "verdienen",
      english: "to earn",
      forms: [
        { pronoun: "ik", dutch: "verdien", english: "I earn" },
        { pronoun: "jij", dutch: "verdient", english: "you earn" },
        { pronoun: "hij", dutch: "verdient", english: "he earns" },
        { pronoun: "wij", dutch: "verdienen", english: "we earn" },
      ],
    },
  ],
  grammar: [
    {
      id: "present-tense",
      name: "Present tense — work & school",
      explanation: "Build simple statements: subject + verb + the rest.",
      sentences: [
        { dutch: "Ik studeer aan de universiteit.", english: "I study at the university." },
        { dutch: "De leraar is druk.", english: "The teacher is busy." },
        { dutch: "Ik schrijf een e-mail.", english: "I write an email." },
        { dutch: "Het examen is moeilijk.", english: "The exam is difficult." },
        { dutch: "De les is makkelijk.", english: "The lesson is easy." },
        { dutch: "Ik leer in de klas.", english: "I learn in the class." },
        { dutch: "Hij verdient een salaris.", english: "He earns a salary." },
        { dutch: "Ik vraag de baas.", english: "I ask the boss." },
      ],
    },
  ],
};

export default level11;
