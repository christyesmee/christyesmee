import type { A1Level } from "../types";

// A1 — Level 5: House & home.
const level05: A1Level = {
  number: 5,
  topic: "House & home",
  vocab: [
    { dutch: "kamer", english: "room", article: "de" },
    { dutch: "keuken", english: "kitchen", article: "de" },
    { dutch: "slaapkamer", english: "bedroom", article: "de" },
    { dutch: "badkamer", english: "bathroom", article: "de" },
    { dutch: "woonkamer", english: "living room", article: "de" },
    { dutch: "deur", english: "door", article: "de" },
    { dutch: "raam", english: "window", article: "het" },
    { dutch: "muur", english: "wall", article: "de" },
    { dutch: "vloer", english: "floor", article: "de" },
    { dutch: "dak", english: "roof", article: "het" },
    { dutch: "trap", english: "stairs", article: "de" },
    { dutch: "tafel", english: "table", article: "de" },
    { dutch: "stoel", english: "chair", article: "de" },
    { dutch: "bed", english: "bed", article: "het" },
    { dutch: "bank", english: "couch", article: "de" },
    { dutch: "kast", english: "cupboard", article: "de" },
    { dutch: "lamp", english: "lamp", article: "de" },
    { dutch: "tuin", english: "garden", article: "de" },
    { dutch: "toilet", english: "toilet", article: "het" },
    { dutch: "sleutel", english: "key", article: "de" },
    { dutch: "garage", english: "garage", article: "de" },
    { dutch: "schoon", english: "clean" },
    { dutch: "vies", english: "dirty" },
    { dutch: "mooi", english: "beautiful" },
    { dutch: "boven", english: "upstairs" },
  ],
  verbs: [
    {
      infinitive: "staan",
      english: "to stand",
      forms: [
        { pronoun: "ik", dutch: "sta", english: "I stand" },
        { pronoun: "jij", dutch: "staat", english: "you stand" },
        { pronoun: "hij", dutch: "staat", english: "he stands" },
        { pronoun: "wij", dutch: "staan", english: "we stand" },
      ],
    },
    {
      infinitive: "zitten",
      english: "to sit",
      forms: [
        { pronoun: "ik", dutch: "zit", english: "I sit" },
        { pronoun: "jij", dutch: "zit", english: "you sit" },
        { pronoun: "hij", dutch: "zit", english: "he sits" },
        { pronoun: "wij", dutch: "zitten", english: "we sit" },
      ],
    },
    {
      infinitive: "slapen",
      english: "to sleep",
      forms: [
        { pronoun: "ik", dutch: "slaap", english: "I sleep" },
        { pronoun: "jij", dutch: "slaapt", english: "you sleep" },
        { pronoun: "hij", dutch: "slaapt", english: "he sleeps" },
        { pronoun: "wij", dutch: "slapen", english: "we sleep" },
      ],
    },
    {
      infinitive: "openen",
      english: "to open",
      forms: [
        { pronoun: "ik", dutch: "open", english: "I open" },
        { pronoun: "jij", dutch: "opent", english: "you open" },
        { pronoun: "hij", dutch: "opent", english: "he opens" },
        { pronoun: "wij", dutch: "openen", english: "we open" },
      ],
    },
    {
      infinitive: "sluiten",
      english: "to close",
      forms: [
        { pronoun: "ik", dutch: "sluit", english: "I close" },
        { pronoun: "jij", dutch: "sluit", english: "you close" },
        { pronoun: "hij", dutch: "sluit", english: "he closes" },
        { pronoun: "wij", dutch: "sluiten", english: "we close" },
      ],
    },
  ],
  grammar: [
    {
      id: "articles",
      name: "de / het + present tense",
      explanation: "Use the right article (de/het) and place the verb second in the sentence.",
      sentences: [
        { dutch: "De keuken is schoon.", english: "The kitchen is clean." },
        { dutch: "Het raam is mooi.", english: "The window is beautiful." },
        { dutch: "Ik slaap in de slaapkamer.", english: "I sleep in the bedroom." },
        { dutch: "De stoel staat in de tuin.", english: "The chair stands in the garden." },
        { dutch: "Ik open de deur.", english: "I open the door." },
        { dutch: "Hij sluit het raam.", english: "He closes the window." },
        { dutch: "De badkamer is vies.", english: "The bathroom is dirty." },
        { dutch: "Ik zit op de bank.", english: "I sit on the couch." },
      ],
    },
  ],
};

export default level05;
