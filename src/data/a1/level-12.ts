import type { A1Level } from "../types";

// A1 — Level 12: Shopping & money.
const level12: A1Level = {
  number: 12,
  topic: "Shopping & money",
  vocab: [
    { dutch: "geld", english: "money", article: "het" },
    { dutch: "prijs", english: "price", article: "de" },
    { dutch: "euro", english: "euro", article: "de" },
    { dutch: "cent", english: "cent", article: "de" },
    { dutch: "korting", english: "discount", article: "de" },
    { dutch: "kassa", english: "checkout", article: "de" },
    { dutch: "bon", english: "receipt", article: "de" },
    { dutch: "pinpas", english: "debit card", article: "de" },
    { dutch: "winkelwagen", english: "shopping cart", article: "de" },
    { dutch: "klant", english: "customer", article: "de" },
    { dutch: "verkoper", english: "seller", article: "de" },
    { dutch: "product", english: "product", article: "het" },
    { dutch: "cadeau", english: "gift", article: "het" },
    { dutch: "etalage", english: "shop window", article: "de" },
    { dutch: "portemonnee", english: "wallet", article: "de" },
    { dutch: "wisselgeld", english: "change", article: "het" },
    { dutch: "aanbieding", english: "offer", article: "de" },
    { dutch: "rij", english: "queue", article: "de" },
    { dutch: "goedkoop", english: "cheap" },
    { dutch: "duur", english: "expensive" },
    { dutch: "gratis", english: "free" },
    { dutch: "vol", english: "full" },
    { dutch: "leeg", english: "empty" },
    { dutch: "genoeg", english: "enough" },
    { dutch: "veel", english: "many" },
  ],
  verbs: [
    {
      infinitive: "betalen",
      english: "to pay",
      forms: [
        { pronoun: "ik", dutch: "betaal", english: "I pay" },
        { pronoun: "jij", dutch: "betaalt", english: "you pay" },
        { pronoun: "hij", dutch: "betaalt", english: "he pays" },
        { pronoun: "wij", dutch: "betalen", english: "we pay" },
      ],
    },
    {
      infinitive: "kosten",
      english: "to cost",
      forms: [
        { pronoun: "ik", dutch: "kost", english: "I cost" },
        { pronoun: "jij", dutch: "kost", english: "you cost" },
        { pronoun: "hij", dutch: "kost", english: "he costs" },
        { pronoun: "wij", dutch: "kosten", english: "we cost" },
      ],
    },
    {
      infinitive: "sparen",
      english: "to save",
      forms: [
        { pronoun: "ik", dutch: "spaar", english: "I save" },
        { pronoun: "jij", dutch: "spaart", english: "you save" },
        { pronoun: "hij", dutch: "spaart", english: "he saves" },
        { pronoun: "wij", dutch: "sparen", english: "we save" },
      ],
    },
    {
      infinitive: "ruilen",
      english: "to exchange",
      forms: [
        { pronoun: "ik", dutch: "ruil", english: "I exchange" },
        { pronoun: "jij", dutch: "ruilt", english: "you exchange" },
        { pronoun: "hij", dutch: "ruilt", english: "he exchanges" },
        { pronoun: "wij", dutch: "ruilen", english: "we exchange" },
      ],
    },
    {
      infinitive: "pinnen",
      english: "to pay by card",
      forms: [
        { pronoun: "ik", dutch: "pin", english: "I pay by card" },
        { pronoun: "jij", dutch: "pint", english: "you pay by card" },
        { pronoun: "hij", dutch: "pint", english: "he pays by card" },
        { pronoun: "wij", dutch: "pinnen", english: "we pay by card" },
      ],
    },
  ],
  grammar: [
    {
      id: "present-tense",
      name: "Present tense — shopping",
      explanation: "Use the present tense to talk about buying and paying.",
      sentences: [
        { dutch: "Het cadeau is duur.", english: "The gift is expensive." },
        { dutch: "Het product is goedkoop.", english: "The product is cheap." },
        { dutch: "Ik betaal met de pinpas.", english: "I pay with the debit card." },
        { dutch: "Hij pint bij de kassa.", english: "He pays by card at the checkout." },
        { dutch: "De winkelwagen is vol.", english: "The shopping cart is full." },
        { dutch: "De portemonnee is leeg.", english: "The wallet is empty." },
        { dutch: "Ik spaar veel geld.", english: "I save a lot of money." },
        { dutch: "Het wisselgeld is genoeg.", english: "The change is enough." },
      ],
    },
  ],
};

export default level12;
