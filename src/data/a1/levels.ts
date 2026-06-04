import type { A1Level } from "../types";
import level01 from "./level-01";

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
