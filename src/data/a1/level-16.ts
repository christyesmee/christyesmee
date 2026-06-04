import type { A1Level } from "../types";

// A1 — Level 16: Feelings & descriptions.
const level16: A1Level = {
  number: 16,
  topic: "Feelings & descriptions",
  vocab: [
    { dutch: "gevoel", english: "feeling", article: "het" },
    { dutch: "emotie", english: "emotion", article: "de" },
    { dutch: "humeur", english: "mood", article: "het" },
    { dutch: "glimlach", english: "smile", article: "de" },
    { dutch: "blij", english: "happy" },
    { dutch: "boos", english: "angry" },
    { dutch: "bang", english: "scared" },
    { dutch: "verdrietig", english: "sad" },
    { dutch: "trots", english: "proud" },
    { dutch: "zenuwachtig", english: "nervous" },
    { dutch: "rustig", english: "calm" },
    { dutch: "gelukkig", english: "happy" },
    { dutch: "eenzaam", english: "lonely" },
    { dutch: "verliefd", english: "in love" },
    { dutch: "jaloers", english: "jealous" },
    { dutch: "verrast", english: "surprised" },
    { dutch: "dankbaar", english: "grateful" },
    { dutch: "sterk", english: "strong" },
    { dutch: "zwak", english: "weak" },
    { dutch: "slim", english: "smart" },
    { dutch: "dom", english: "stupid" },
    { dutch: "eerlijk", english: "honest" },
    { dutch: "aardig", english: "kind" },
    { dutch: "grappig", english: "funny" },
    { dutch: "serieus", english: "serious" },
  ],
  verbs: [
    {
      infinitive: "lachen",
      english: "to laugh",
      forms: [
        { pronoun: "ik", dutch: "lach", english: "I laugh" },
        { pronoun: "jij", dutch: "lacht", english: "you laugh" },
        { pronoun: "hij", dutch: "lacht", english: "he laughs" },
        { pronoun: "wij", dutch: "lachen", english: "we laugh" },
      ],
    },
    {
      infinitive: "huilen",
      english: "to cry",
      forms: [
        { pronoun: "ik", dutch: "huil", english: "I cry" },
        { pronoun: "jij", dutch: "huilt", english: "you cry" },
        { pronoun: "hij", dutch: "huilt", english: "he cries" },
        { pronoun: "wij", dutch: "huilen", english: "we cry" },
      ],
    },
    {
      infinitive: "lijken",
      english: "to seem",
      forms: [
        { pronoun: "ik", dutch: "lijk", english: "I seem" },
        { pronoun: "jij", dutch: "lijkt", english: "you seem" },
        { pronoun: "hij", dutch: "lijkt", english: "he seems" },
        { pronoun: "wij", dutch: "lijken", english: "we seem" },
      ],
    },
    {
      infinitive: "denken",
      english: "to think",
      forms: [
        { pronoun: "ik", dutch: "denk", english: "I think" },
        { pronoun: "jij", dutch: "denkt", english: "you think" },
        { pronoun: "hij", dutch: "denkt", english: "he thinks" },
        { pronoun: "wij", dutch: "denken", english: "we think" },
      ],
    },
    {
      infinitive: "hopen",
      english: "to hope",
      forms: [
        { pronoun: "ik", dutch: "hoop", english: "I hope" },
        { pronoun: "jij", dutch: "hoopt", english: "you hope" },
        { pronoun: "hij", dutch: "hoopt", english: "he hopes" },
        { pronoun: "wij", dutch: "hopen", english: "we hope" },
      ],
    },
  ],
  grammar: [
    {
      id: "present-tense",
      name: "Describing feelings",
      explanation: "Use 'zijn' + an adjective to say how someone feels: 'Ik ben blij.'",
      sentences: [
        { dutch: "Ik ben blij.", english: "I am happy." },
        { dutch: "Hij is boos.", english: "He is angry." },
        { dutch: "Ik ben niet bang.", english: "I am not scared." },
        { dutch: "Ik ben trots.", english: "I am proud." },
        { dutch: "Ik lach.", english: "I laugh." },
        { dutch: "Hij huilt.", english: "He cries." },
        { dutch: "Wij zijn gelukkig.", english: "We are happy." },
        { dutch: "Ik ben verliefd.", english: "I am in love." },
      ],
    },
  ],
};

export default level16;
