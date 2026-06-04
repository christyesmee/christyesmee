import { Link, useParams } from "react-router-dom";
import type { CEFRLevel } from "../data/types";
import { catalog, CEFR_LEVELS } from "../data/catalog";
import { getLessonByLevel, lessonHasContent } from "../data/lessons";
import { useProgress } from "../lib/progress";

export default function LevelOverviewPage() {
  const { cefr } = useParams<{ cefr: string }>();
  const level = cefr as CEFRLevel;
  const { isUnlocked, isCompleted, getScore } = useProgress();

  if (!CEFR_LEVELS.includes(level)) {
    return <p className="p-10 text-center text-slate-500">Unknown level.</p>;
  }

  const levels = catalog[level];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link to="/" className="text-sm text-orange-500 hover:underline">
        ← All levels
      </Link>
      <h1 className="mt-2 text-2xl font-bold text-slate-800">Level {level}</h1>
      <p className="text-slate-500">Complete each level with 80% to unlock the next.</p>

      <ol className="mt-6 space-y-3">
        {levels.map((meta) => {
          const lesson = getLessonByLevel(level, meta.number)!;
          const unlocked = isUnlocked(level, meta.number);
          const completed = isCompleted(lesson.id);
          const hasContent = lessonHasContent(lesson);
          const score = getScore(lesson.id);

          const inner = (
            <div
              className={[
                "flex items-center gap-4 rounded-xl border p-4 transition",
                unlocked
                  ? "border-slate-200 bg-white shadow-sm hover:shadow-md"
                  : "border-slate-100 bg-slate-50 opacity-60",
              ].join(" ")}
            >
              <div
                className={[
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                  completed
                    ? "bg-green-500 text-white"
                    : unlocked
                      ? "bg-orange-100 text-orange-600"
                      : "bg-slate-200 text-slate-400",
                ].join(" ")}
              >
                {completed ? "✓" : meta.number}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-slate-800">{meta.title}</p>
                <p className="truncate text-sm text-slate-400">{meta.theme}</p>
              </div>
              <div className="shrink-0 text-right">
                {!unlocked && <span className="text-lg">🔒</span>}
                {unlocked && !hasContent && (
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700">
                    soon
                  </span>
                )}
                {unlocked && completed && (
                  <span className="text-xs text-green-600">{Math.round(score * 100)}%</span>
                )}
              </div>
            </div>
          );

          return (
            <li key={meta.number}>
              {unlocked ? <Link to={`/lesson/${lesson.id}`}>{inner}</Link> : inner}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
