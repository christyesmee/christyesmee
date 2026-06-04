import type { A1Level } from "../types";

// A1 — Level 19: Holidays & celebrations.
const level19: A1Level = {
  number: 19,
  topic: "Holidays & celebrations",
  vocab: [
    { dutch: "feestdag", english: "holiday", article: "de" },
    { dutch: "verjaardag", english: "birthday", article: "de" },
    { dutch: "geschenk", english: "gift", article: "het" },
    { dutch: "taart", english: "cake", article: "de" },
    { dutch: "kaars", english: "candle", article: "de" },
    { dutch: "ballon", english: "balloon", article: "de" },
    { dutch: "slinger", english: "garland", article: "de" },
    { dutch: "vlag", english: "flag", article: "de" },
    { dutch: "kerst", english: "Christmas", article: "de" },
    { dutch: "viering", english: "celebration", article: "de" },
    { dutch: "bruiloft", english: "wedding", article: "de" },
    { dutch: "gast", english: "guest", article: "de" },
    { dutch: "uitnodiging", english: "invitation", article: "de" },
    { dutch: "traditie", english: "tradition", article: "de" },
    { dutch: "vuurwerk", english: "fireworks", article: "het" },
    { dutch: "champagne", english: "champagne", article: "de" },
    { dutch: "kalkoen", english: "turkey", article: "de" },
    { dutch: "chocolade", english: "chocolate", article: "de" },
    { dutch: "optocht", english: "parade", article: "de" },
    { dutch: "geluk", english: "luck", article: "het" },
    { dutch: "feestelijk", english: "festive" },
    { dutch: "gezellig", english: "cosy" },
    { dutch: "speciaal", english: "special" },
    { dutch: "vrolijk", english: "cheerful" },
    { dutch: "jarig", english: "having a birthday" },
  ],
  verbs: [
    {
      infinitive: "vieren",
      english: "to celebrate",
      forms: [
        { pronoun: "ik", dutch: "vier", english: "I celebrate" },
        { pronoun: "jij", dutch: "viert", english: "you celebrate" },
        { pronoun: "hij", dutch: "viert", english: "he celebrates" },
        { pronoun: "wij", dutch: "vieren", english: "we celebrate" },
      ],
    },
    {
      infinitive: "feliciteren",
      english: "to congratulate",
      forms: [
        { pronoun: "ik", dutch: "feliciteer", english: "I congratulate" },
        { pronoun: "jij", dutch: "feliciteert", english: "you congratulate" },
        { pronoun: "hij", dutch: "feliciteert", english: "he congratulates" },
        { pronoun: "wij", dutch: "feliciteren", english: "we congratulate" },
      ],
    },
    {
      infinitive: "geven",
      english: "to give",
      forms: [
        { pronoun: "ik", dutch: "geef", english: "I give" },
        { pronoun: "jij", dutch: "geeft", english: "you give" },
        { pronoun: "hij", dutch: "geeft", english: "he gives" },
        { pronoun: "wij", dutch: "geven", english: "we give" },
      ],
    },
    {
      infinitive: "wensen",
      english: "to wish",
      forms: [
        { pronoun: "ik", dutch: "wens", english: "I wish" },
        { pronoun: "jij", dutch: "wenst", english: "you wish" },
        { pronoun: "hij", dutch: "wenst", english: "he wishes" },
        { pronoun: "wij", dutch: "wensen", english: "we wish" },
      ],
    },
    {
      infinitive: "versieren",
      english: "to decorate",
      forms: [
        { pronoun: "ik", dutch: "versier", english: "I decorate" },
        { pronoun: "jij", dutch: "versiert", english: "you decorate" },
        { pronoun: "hij", dutch: "versiert", english: "he decorates" },
        { pronoun: "wij", dutch: "versieren", english: "we decorate" },
      ],
    },
  ],
  grammar: [
    {
      id: "present-tense",
      name: "Present tense — celebrations",
      explanation: "Talk about parties and holidays in the present tense.",
      sentences: [
        { dutch: "Wij vieren de verjaardag.", english: "We celebrate the birthday." },
        { dutch: "Ik geef een geschenk.", english: "I give a gift." },
        { dutch: "De taart is speciaal.", english: "The cake is special." },
        { dutch: "De viering is gezellig.", english: "The celebration is cosy." },
        { dutch: "Ik wens je geluk.", english: "I wish you luck." },
        { dutch: "Wij versieren de taart.", english: "We decorate the cake." },
        { dutch: "De gast is vrolijk.", english: "The guest is cheerful." },
        { dutch: "Ik feliciteer de gast.", english: "I congratulate the guest." },
      ],
    },
  ],
};

export default level19;
