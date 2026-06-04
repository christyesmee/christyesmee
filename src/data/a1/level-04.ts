import type { A1Level } from "../types";

// A1 — Level 4: Food & drink.
const level04: A1Level = {
  number: 4,
  topic: "Food & drink",
  vocab: [
    { dutch: "eten", english: "food", article: "het" },
    { dutch: "ontbijt", english: "breakfast", article: "het" },
    { dutch: "lunch", english: "lunch", article: "de" },
    { dutch: "diner", english: "dinner", article: "het" },
    { dutch: "ei", english: "egg", article: "het" },
    { dutch: "melk", english: "milk", article: "de" },
    { dutch: "boter", english: "butter", article: "de" },
    { dutch: "vlees", english: "meat", article: "het" },
    { dutch: "vis", english: "fish", article: "de" },
    { dutch: "groente", english: "vegetable", article: "de" },
    { dutch: "fruit", english: "fruit", article: "het" },
    { dutch: "banaan", english: "banana", article: "de" },
    { dutch: "aardappel", english: "potato", article: "de" },
    { dutch: "rijst", english: "rice", article: "de" },
    { dutch: "soep", english: "soup", article: "de" },
    { dutch: "suiker", english: "sugar", article: "de" },
    { dutch: "zout", english: "salt", article: "het" },
    { dutch: "wijn", english: "wine", article: "de" },
    { dutch: "bier", english: "beer", article: "het" },
    { dutch: "glas", english: "glass", article: "het" },
    { dutch: "bord", english: "plate", article: "het" },
    { dutch: "honger", english: "hunger", article: "de" },
    { dutch: "lekker", english: "tasty" },
    { dutch: "zoet", english: "sweet" },
    { dutch: "warm", english: "warm" },
  ],
  verbs: [
    {
      infinitive: "drinken",
      english: "to drink",
      forms: [
        { pronoun: "ik", dutch: "drink", english: "I drink" },
        { pronoun: "jij", dutch: "drinkt", english: "you drink" },
        { pronoun: "hij", dutch: "drinkt", english: "he drinks" },
        { pronoun: "wij", dutch: "drinken", english: "we drink" },
      ],
    },
    {
      infinitive: "koken",
      english: "to cook",
      forms: [
        { pronoun: "ik", dutch: "kook", english: "I cook" },
        { pronoun: "jij", dutch: "kookt", english: "you cook" },
        { pronoun: "hij", dutch: "kookt", english: "he cooks" },
        { pronoun: "wij", dutch: "koken", english: "we cook" },
      ],
    },
    {
      infinitive: "proeven",
      english: "to taste",
      forms: [
        { pronoun: "ik", dutch: "proef", english: "I taste" },
        { pronoun: "jij", dutch: "proeft", english: "you taste" },
        { pronoun: "hij", dutch: "proeft", english: "he tastes" },
        { pronoun: "wij", dutch: "proeven", english: "we taste" },
      ],
    },
    {
      infinitive: "bestellen",
      english: "to order",
      forms: [
        { pronoun: "ik", dutch: "bestel", english: "I order" },
        { pronoun: "jij", dutch: "bestelt", english: "you order" },
        { pronoun: "hij", dutch: "bestelt", english: "he orders" },
        { pronoun: "wij", dutch: "bestellen", english: "we order" },
      ],
    },
    {
      infinitive: "snijden",
      english: "to cut",
      forms: [
        { pronoun: "ik", dutch: "snijd", english: "I cut" },
        { pronoun: "jij", dutch: "snijdt", english: "you cut" },
        { pronoun: "hij", dutch: "snijdt", english: "he cuts" },
        { pronoun: "wij", dutch: "snijden", english: "we cut" },
      ],
    },
  ],
  grammar: [
    {
      id: "negation",
      name: "Negation — geen",
      explanation: "Use 'geen' to say 'no/not a' before a noun: 'Ik drink geen bier.'",
      sentences: [
        { dutch: "Ik heb honger.", english: "I am hungry." },
        { dutch: "De soep is lekker.", english: "The soup is tasty." },
        { dutch: "Ik drink melk.", english: "I drink milk." },
        { dutch: "Ik drink geen bier.", english: "I don't drink beer." },
        { dutch: "Hij kookt rijst.", english: "He cooks rice." },
        { dutch: "Het fruit is zoet.", english: "The fruit is sweet." },
        { dutch: "Wij bestellen wijn.", english: "We order wine." },
        { dutch: "Ik heb geen suiker.", english: "I have no sugar." },
      ],
    },
  ],
};

export default level04;
