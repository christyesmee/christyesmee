import type { A1Level } from "../types";

// A1 — Level 2: Family & people.
const level02: A1Level = {
  number: 2,
  topic: "Family & people",
  vocab: [
    { dutch: "moeder", english: "mother", article: "de" },
    { dutch: "vader", english: "father", article: "de" },
    { dutch: "zus", english: "sister", article: "de" },
    { dutch: "broer", english: "brother", article: "de" },
    { dutch: "oma", english: "grandma", article: "de" },
    { dutch: "opa", english: "grandpa", article: "de" },
    { dutch: "tante", english: "aunt", article: "de" },
    { dutch: "oom", english: "uncle", article: "de" },
    { dutch: "neef", english: "cousin (male)", article: "de" },
    { dutch: "nicht", english: "cousin (female)", article: "de" },
    { dutch: "dochter", english: "daughter", article: "de" },
    { dutch: "zoon", english: "son", article: "de" },
    { dutch: "baby", english: "baby", article: "de" },
    { dutch: "gezin", english: "family", article: "het" },
    { dutch: "ouders", english: "parents", article: "de" },
    { dutch: "vriendin", english: "friend (female)", article: "de" },
    { dutch: "buurman", english: "neighbour", article: "de" },
    { dutch: "mensen", english: "people", article: "de" },
    { dutch: "partner", english: "partner", article: "de" },
    { dutch: "naam", english: "name", article: "de" },
    { dutch: "jong", english: "young" },
    { dutch: "oud", english: "old" },
    { dutch: "lief", english: "sweet" },
    { dutch: "samen", english: "together" },
    { dutch: "ook", english: "also" },
  ],
  verbs: [
    {
      infinitive: "heten",
      english: "to be called",
      forms: [
        { pronoun: "ik", dutch: "heet", english: "I am called" },
        { pronoun: "jij", dutch: "heet", english: "you are called" },
        { pronoun: "hij", dutch: "heet", english: "he is called" },
        { pronoun: "wij", dutch: "heten", english: "we are called" },
      ],
    },
    {
      infinitive: "kennen",
      english: "to know",
      forms: [
        { pronoun: "ik", dutch: "ken", english: "I know" },
        { pronoun: "jij", dutch: "kent", english: "you know" },
        { pronoun: "hij", dutch: "kent", english: "he knows" },
        { pronoun: "wij", dutch: "kennen", english: "we know" },
      ],
    },
    {
      infinitive: "helpen",
      english: "to help",
      forms: [
        { pronoun: "ik", dutch: "help", english: "I help" },
        { pronoun: "jij", dutch: "helpt", english: "you help" },
        { pronoun: "hij", dutch: "helpt", english: "he helps" },
        { pronoun: "wij", dutch: "helpen", english: "we help" },
      ],
    },
    {
      infinitive: "bellen",
      english: "to call",
      forms: [
        { pronoun: "ik", dutch: "bel", english: "I call" },
        { pronoun: "jij", dutch: "belt", english: "you call" },
        { pronoun: "hij", dutch: "belt", english: "he calls" },
        { pronoun: "wij", dutch: "bellen", english: "we call" },
      ],
    },
    {
      infinitive: "zoeken",
      english: "to look for",
      forms: [
        { pronoun: "ik", dutch: "zoek", english: "I look for" },
        { pronoun: "jij", dutch: "zoekt", english: "you look for" },
        { pronoun: "hij", dutch: "zoekt", english: "he looks for" },
        { pronoun: "wij", dutch: "zoeken", english: "we look for" },
      ],
    },
  ],
  grammar: [
    {
      id: "possessives",
      name: "Possessives — mijn, jouw",
      explanation: "Say whose someone is: mijn (my), jouw (your).",
      sentences: [
        { dutch: "Mijn moeder is lief.", english: "My mother is sweet." },
        { dutch: "Mijn broer is jong.", english: "My brother is young." },
        { dutch: "Jouw vader is oud.", english: "Your father is old." },
        { dutch: "Ik help mijn zus.", english: "I help my sister." },
        { dutch: "Ik bel mijn opa.", english: "I call my grandpa." },
        { dutch: "Ik ken jouw tante.", english: "I know your aunt." },
        { dutch: "Mijn ouders zijn oud.", english: "My parents are old." },
        { dutch: "Wij zoeken oma samen.", english: "We look for grandma together." },
      ],
    },
  ],
};

export default level02;
