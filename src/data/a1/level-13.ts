import type { A1Level } from "../types";

// A1 — Level 13: Travel & transport.
const level13: A1Level = {
  number: 13,
  topic: "Travel & transport",
  vocab: [
    { dutch: "trein", english: "train", article: "de" },
    { dutch: "bus", english: "bus", article: "de" },
    { dutch: "tram", english: "tram", article: "de" },
    { dutch: "vliegtuig", english: "airplane", article: "het" },
    { dutch: "boot", english: "boat", article: "de" },
    { dutch: "metro", english: "metro", article: "de" },
    { dutch: "halte", english: "stop", article: "de" },
    { dutch: "kaartje", english: "ticket", article: "het" },
    { dutch: "reis", english: "trip", article: "de" },
    { dutch: "koffer", english: "suitcase", article: "de" },
    { dutch: "bagage", english: "luggage", article: "de" },
    { dutch: "perron", english: "platform", article: "het" },
    { dutch: "chauffeur", english: "driver", article: "de" },
    { dutch: "passagier", english: "passenger", article: "de" },
    { dutch: "luchthaven", english: "airport", article: "de" },
    { dutch: "haven", english: "harbour", article: "de" },
    { dutch: "paspoort", english: "passport", article: "het" },
    { dutch: "kaart", english: "map", article: "de" },
    { dutch: "spoor", english: "track", article: "het" },
    { dutch: "snelweg", english: "motorway", article: "de" },
    { dutch: "file", english: "traffic jam", article: "de" },
    { dutch: "comfortabel", english: "comfortable" },
    { dutch: "onderweg", english: "on the way" },
    { dutch: "terug", english: "back" },
    { dutch: "vertraagd", english: "delayed" },
  ],
  verbs: [
    {
      infinitive: "reizen",
      english: "to travel",
      forms: [
        { pronoun: "ik", dutch: "reis", english: "I travel" },
        { pronoun: "jij", dutch: "reist", english: "you travel" },
        { pronoun: "hij", dutch: "reist", english: "he travels" },
        { pronoun: "wij", dutch: "reizen", english: "we travel" },
      ],
    },
    {
      infinitive: "rijden",
      english: "to drive",
      forms: [
        { pronoun: "ik", dutch: "rijd", english: "I drive" },
        { pronoun: "jij", dutch: "rijdt", english: "you drive" },
        { pronoun: "hij", dutch: "rijdt", english: "he drives" },
        { pronoun: "wij", dutch: "rijden", english: "we drive" },
      ],
    },
    {
      infinitive: "vliegen",
      english: "to fly",
      forms: [
        { pronoun: "ik", dutch: "vlieg", english: "I fly" },
        { pronoun: "jij", dutch: "vliegt", english: "you fly" },
        { pronoun: "hij", dutch: "vliegt", english: "he flies" },
        { pronoun: "wij", dutch: "vliegen", english: "we fly" },
      ],
    },
    {
      infinitive: "missen",
      english: "to miss",
      forms: [
        { pronoun: "ik", dutch: "mis", english: "I miss" },
        { pronoun: "jij", dutch: "mist", english: "you miss" },
        { pronoun: "hij", dutch: "mist", english: "he misses" },
        { pronoun: "wij", dutch: "missen", english: "we miss" },
      ],
    },
    {
      infinitive: "stoppen",
      english: "to stop",
      forms: [
        { pronoun: "ik", dutch: "stop", english: "I stop" },
        { pronoun: "jij", dutch: "stopt", english: "you stop" },
        { pronoun: "hij", dutch: "stopt", english: "he stops" },
        { pronoun: "wij", dutch: "stoppen", english: "we stop" },
      ],
    },
  ],
  grammar: [
    {
      id: "present-tense",
      name: "Present tense — travel",
      explanation: "Say how you travel with 'met' + a means of transport.",
      sentences: [
        { dutch: "De trein is vertraagd.", english: "The train is delayed." },
        { dutch: "Ik reis met de bus.", english: "I travel by bus." },
        { dutch: "Ik mis de trein.", english: "I miss the train." },
        { dutch: "De bus stopt bij de halte.", english: "The bus stops at the stop." },
        { dutch: "De chauffeur rijdt.", english: "The driver drives." },
        { dutch: "De reis is comfortabel.", english: "The trip is comfortable." },
        { dutch: "Wij zijn onderweg.", english: "We are on the way." },
        { dutch: "Ik reis met de trein.", english: "I travel by train." },
      ],
    },
  ],
};

export default level13;
