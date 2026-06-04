import type { A1Level } from "../types";
import level01 from "./level-01";
import level02 from "./level-02";
import level03 from "./level-03";
import level04 from "./level-04";
import level05 from "./level-05";
import level06 from "./level-06";
import level07 from "./level-07";
import level08 from "./level-08";
import level09 from "./level-09";
import level10 from "./level-10";

// Topics for all 20 A1 levels. Level 1 is fully authored; the rest are
// planned placeholders (empty content) until written.
const TOPICS: string[] = [
  "Me & daily basics", // 1 (authored)
  "Family & people", // 2
  "Numbers & time", // 3
  "Food & drink", // 4
  "House & home", // 5
  "The city & places", // 6
  "Clothing", // 7
  "Body & health", // 8
  "Daily routine", // 9
  "Hobbies & free time", // 10
  "Work & school", // 11
  "Shopping & money", // 12
  "Travel & transport", // 13
  "Weather & seasons", // 14
  "Nature & animals", // 15
  "Feelings & descriptions", // 16
  "Communication & tech", // 17
  "Directions & locations", // 18
  "Holidays & celebrations", // 19
  "Everyday conversations", // 20
];

/** Levels that are fully authored. Add more here as you write them. */
const authored: Record<number, A1Level> = {
  1: level01,
  2: level02,
  3: level03,
  4: level04,
  5: level05,
  6: level06,
  7: level07,
  8: level08,
  9: level09,
  10: level10,
};

export const A1_LEVELS: A1Level[] = TOPICS.map((topic, i) => {
  const number = i + 1;
  if (authored[number]) return authored[number];
  return { number, topic, vocab: [], verbs: [], grammar: [] };
});

export function getA1Level(number: number): A1Level | undefined {
  return A1_LEVELS.find((l) => l.number === number);
}

export const A1_LEVEL_COUNT = A1_LEVELS.length;
