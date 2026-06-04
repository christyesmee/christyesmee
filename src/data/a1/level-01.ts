import type { A1Level } from "../types";

// A1 — Level 1 (fully authored reference lesson).
// Topic: me & daily basics. Grammar sentences use ONLY the words below.
const level01: A1Level = {
  number: 1,
  topic: "Me & daily basics",

  // 25 vocabulary words.
  vocab: [
    { dutch: "man", english: "man", article: "de" },
    { dutch: "vrouw", english: "woman", article: "de" },
    { dutch: "kind", english: "child", article: "het" },
    { dutch: "naam", english: "name", article: "de" },
    { dutch: "huis", english: "house", article: "het" },
    { dutch: "stad", english: "city", article: "de" },
    { dutch: "straat", english: "street", article: "de" },
    { dutch: "brood", english: "bread", article: "het" },
    { dutch: "kaas", english: "cheese", article: "de" },
    { dutch: "water", english: "water", article: "het" },
    { dutch: "koffie", english: "coffee", article: "de" },
    { dutch: "thee", english: "tea", article: "de" },
    { dutch: "appel", english: "apple", article: "de" },
    { dutch: "school", english: "school", article: "de" },
    { dutch: "werk", english: "work", article: "het" },
    { dutch: "dag", english: "day", article: "de" },
    { dutch: "vriend", english: "friend", article: "de" },
    { dutch: "auto", english: "car", article: "de" },
    { dutch: "hond", english: "dog", article: "de" },
    { dutch: "kat", english: "cat", article: "de" },
    { dutch: "groot", english: "big" },
    { dutch: "klein", english: "small" },
    { dutch: "goed", english: "good" },
    { dutch: "hier", english: "here" },
    { dutch: "niet", english: "not" },
  ],

  // 5 verbs. Each form is tested separately, plus the whole verb.
  verbs: [
    {
      infinitive: "zijn",
      english: "to be",
      forms: [
        { pronoun: "ik", dutch: "ben", english: "I am" },
        { pronoun: "jij", dutch: "bent", english: "you are" },
        { pronoun: "hij/zij/het", dutch: "is", english: "he/she/it is" },
        { pronoun: "wij/jullie/zij", dutch: "zijn", english: "we/you/they are" },
      ],
    },
    {
      infinitive: "hebben",
      english: "to have",
      forms: [
        { pronoun: "ik", dutch: "heb", english: "I have" },
        { pronoun: "jij", dutch: "hebt", english: "you have" },
        { pronoun: "hij/zij/het", dutch: "heeft", english: "he/she/it has" },
        { pronoun: "wij/jullie/zij", dutch: "hebben", english: "we/you/they have" },
      ],
    },
    {
      infinitive: "wonen",
      english: "to live",
      forms: [
        { pronoun: "ik", dutch: "woon", english: "I live" },
        { pronoun: "jij", dutch: "woont", english: "you live" },
        { pronoun: "hij/zij/het", dutch: "woont", english: "he/she/it lives" },
        { pronoun: "wij/jullie/zij", dutch: "wonen", english: "we/you/they live" },
      ],
    },
    {
      infinitive: "werken",
      english: "to work",
      forms: [
        { pronoun: "ik", dutch: "werk", english: "I work" },
        { pronoun: "jij", dutch: "werkt", english: "you work" },
        { pronoun: "hij/zij/het", dutch: "werkt", english: "he/she/it works" },
        { pronoun: "wij/jullie/zij", dutch: "werken", english: "we/you/they work" },
      ],
    },
    {
      infinitive: "eten",
      english: "to eat",
      forms: [
        { pronoun: "ik", dutch: "eet", english: "I eat" },
        { pronoun: "jij", dutch: "eet", english: "you eat" },
        { pronoun: "hij/zij/het", dutch: "eet", english: "he/she/it eats" },
        { pronoun: "wij/jullie/zij", dutch: "eten", english: "we/you/they eat" },
      ],
    },
  ],

  // Grammar — only uses the vocab + verbs above (plus function words:
  // pronouns, de/het/een and the preposition "in").
  grammar: [
    {
      id: "present-tense",
      name: "Present tense — simple statements",
      explanation:
        "Subject + verb + rest. With ik you use the stem; with jij/hij/zij you add -t; with wij/jullie/zij you use the infinitive.",
      sentences: [
        { dutch: "Ik ben hier.", english: "I am here." },
        { dutch: "De man is groot.", english: "The man is big." },
        { dutch: "Het kind is klein.", english: "The child is small." },
        { dutch: "Ik woon in de stad.", english: "I live in the city." },
        { dutch: "Ik heb een hond.", english: "I have a dog." },
        { dutch: "Het kind eet brood.", english: "The child eats bread." },
        { dutch: "Wij werken hier.", english: "We work here." },
        { dutch: "De vrouw heeft een auto.", english: "The woman has a car." },
        { dutch: "Ik ben niet groot.", english: "I am not big." },
        { dutch: "De koffie is goed.", english: "The coffee is good." },
      ],
    },
    {
      id: "articles",
      name: "de / het / een (articles)",
      explanation:
        "'de' and 'het' both mean 'the' (you learn which per word); 'een' means 'a/an'.",
      sentences: [
        { dutch: "het huis", english: "the house" },
        { dutch: "de hond", english: "the dog" },
        { dutch: "het kind", english: "the child" },
        { dutch: "de vrouw", english: "the woman" },
        { dutch: "een appel", english: "an apple" },
        { dutch: "een auto", english: "a car" },
        { dutch: "het brood", english: "the bread" },
        { dutch: "de stad", english: "the city" },
      ],
    },
  ],
};

export default level01;
