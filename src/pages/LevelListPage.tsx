import { Link } from "react-router-dom";
import { A1_LEVELS } from "../data/a1/levels";
import { levelHasContent } from "../data/types";

export default function LevelListPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link to="/" className="text-sm text-orange-500 hover:underline">
        ← Levels
      </Link>
      <h1 className="mt-2 text-2xl font-bold text-slate-800">A1 — Beginner</h1>
      <p className="text-slate-500">20 levels, each with its own topic.</p>

      <ol className="mt-6 grid gap-3 sm:grid-cols-2">
        {A1_LEVELS.map((level) => {
          const ready = levelHasContent(level);
          return (
            <li key={level.number}>
              <Link
                to={`/a1/${level.number}`}
                className={[
                  "flex items-center gap-4 rounded-xl border p-4 transition",
                  ready
                    ? "border-slate-200 bg-white shadow-sm hover:shadow-md"
                    : "border-slate-100 bg-slate-50 hover:bg-white",
                ].join(" ")}
              >
                <span
                  className={[
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                    ready ? "bg-orange-100 text-orange-600" : "bg-slate-200 text-slate-400",
                  ].join(" ")}
                >
                  {level.number}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-medium text-slate-800">{level.topic}</span>
                  <span className="block text-xs text-slate-400">Level {level.number}</span>
                </span>
                {!ready && (
                  <span className="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700">
                    soon
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
