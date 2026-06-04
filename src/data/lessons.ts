import type { CEFRLevel, Lesson } from "./types";
import { catalog } from "./catalog";
import a1Level01 from "./a1/level-01";

/** Lessons that are fully authored. Add more here as you write them. */
const authoredLessons: Lesson[] = [a1Level01];

const lessonId = (level: CEFRLevel, number: number) =>
  `${level.toLowerCase()}-${String(number).padStart(2, "0")}`;

/** Build a placeholder lesson from catalog metadata so navigation works
 *  for levels that have not been fully written yet. */
function makePlaceholder(level: CEFRLevel, number: number, title: string, theme: string): Lesson {
  return {
    id: lessonId(level, number),
    level,
    number,
    title,
    theme,
    vocabulary: [],
    grammar: [],
    verbs: [],
    exercises: [],
  };
}

/** All lessons, keyed by id, with authored content taking precedence. */
const lessonMap: Record<string, Lesson> = {};

(Object.keys(catalog) as CEFRLevel[]).forEach((level) => {
  catalog[level].forEach((meta) => {
    lessonMap[lessonId(level, meta.number)] = makePlaceholder(
      level,
      meta.number,
      meta.title,
      meta.theme,
    );
  });
});

authoredLessons.forEach((lesson) => {
  lessonMap[lesson.id] = lesson;
});

export function getLesson(id: string): Lesson | undefined {
  return lessonMap[id];
}

export function getLessonByLevel(level: CEFRLevel, number: number): Lesson | undefined {
  return lessonMap[lessonId(level, number)];
}

/** Whether a lesson has real content (vs. a placeholder). */
export function lessonHasContent(lesson: Lesson): boolean {
  return (
    lesson.vocabulary.length > 0 ||
    lesson.grammar.length > 0 ||
    lesson.verbs.length > 0 ||
    lesson.exercises.length > 0
  );
}

export { lessonId };
