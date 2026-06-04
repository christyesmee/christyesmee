import type { CEFRLevel } from "./types";

/** Title + theme for every level. Used to render the level overview and to
 *  generate placeholder lessons for levels that are not fully written yet. */
export interface LevelMeta {
  number: number;
  title: string;
  theme: string;
}

export const catalog: Record<CEFRLevel, LevelMeta[]> = {
  A1: [
    { number: 1, title: "Hallo! — Greetings & introducing yourself", theme: "Say hello and introduce yourself." },
    { number: 2, title: "Numbers & counting", theme: "Count from 0 to 100." },
    { number: 3, title: "Family & people", theme: "Talk about your family and friends." },
    { number: 4, title: "De or het? — Articles & nouns", theme: "Learn definite and indefinite articles." },
    { number: 5, title: "Daily routine — regular verbs", theme: "Describe your day with -en verbs." },
    { number: 6, title: "Food & drink", theme: "Order food and talk about meals." },
    { number: 7, title: "Time & days of the week", theme: "Tell the time and name the days." },
    { number: 8, title: "House & home", theme: "Describe rooms and furniture." },
    { number: 9, title: "Hobbies & free time", theme: "Talk about what you like to do." },
    { number: 10, title: "Review & simple conversations", theme: "Put A1 together in short dialogues." },
  ],
  A2: [
    { number: 1, title: "The past — perfect tense (1)", theme: "Form 'ge-...-t/-d' past participles." },
    { number: 2, title: "Shopping & money", theme: "Buy things and ask about prices." },
    { number: 3, title: "Directions & the city", theme: "Ask for and give directions." },
    { number: 4, title: "Travel & transport", theme: "Talk about trips and the train." },
    { number: 5, title: "Separable verbs", theme: "Use verbs like 'opstaan' and 'meenemen'." },
    { number: 6, title: "Health & the body", theme: "Describe how you feel and visit the doctor." },
    { number: 7, title: "Work & jobs", theme: "Talk about professions and the workplace." },
    { number: 8, title: "Comparatives & superlatives", theme: "Bigger, biggest — compare things." },
    { number: 9, title: "Weather & seasons", theme: "Describe the weather and seasons." },
    { number: 10, title: "Review & telling a story", theme: "Combine A2 to tell a short story." },
  ],
  B1: [
    { number: 1, title: "Opinions & arguments", theme: "Express and justify your opinion." },
    { number: 2, title: "Modal verbs in depth", theme: "Master kunnen, moeten, mogen, willen, zullen." },
    { number: 3, title: "Conditional — 'als' & 'zou'", theme: "Talk about hypothetical situations." },
    { number: 4, title: "Word order & subordinate clauses", theme: "Verb-final clauses with omdat, dat, terwijl." },
    { number: 5, title: "Education & learning", theme: "Discuss studies and courses." },
    { number: 6, title: "Media & news", theme: "Understand and discuss the news." },
    { number: 7, title: "Relative clauses — die / dat", theme: "Connect sentences with relative pronouns." },
    { number: 8, title: "The future & making plans", theme: "Use 'gaan' and 'zullen' for the future." },
    { number: 9, title: "Culture & traditions", theme: "Talk about Dutch culture and holidays." },
    { number: 10, title: "Review & formal writing", theme: "Combine B1 in an email or letter." },
  ],
};

export const CEFR_LEVELS: CEFRLevel[] = ["A1", "A2", "B1"];
