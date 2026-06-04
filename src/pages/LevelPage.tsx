import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getA1Level } from "../data/a1/levels";
import { categoryHasContent, levelHasContent, type Category } from "../data/types";
import { setLastLevel } from "../lib/userProgress";
import { useAuthState } from "../state";

const CATEGORIES: { key: Category; label: string; icon: string; blurb: string }[] = [
  { key: "vocab", label: "Vocabulary", icon: "📚", blurb: "25 words for this topic" },
  { key: "grammar", label: "Grammar", icon: "📖", blurb: "Build sentences with these words" },
  { key: "verbs", label: "Verbs", icon: "🔧", blurb: "5 verbs, every form tested" },
];

export default function LevelPage() {
  const { num } = useParams<{ num: string }>();
  const { user } = useAuthState();
  const level = num ? getA1Level(Number(num)) : undefined;

  useEffect(() => {
    if (user && level) setLastLevel(user, level.number);
  }, [user, level]);

  if (!level) {
    return <p className="p-10 text-center text-slate-500">Level not found.</p>;
  }

  const ready = levelHasContent(level);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link to="/a1" className="text-sm text-orange-500 hover:underline">
        ← All A1 levels
      </Link>
      <h1 className="mt-2 text-2xl font-bold text-slate-800">
        Level {level.number} — {level.topic}
      </h1>
      <p className="text-slate-500">Choose a category to practise.</p>

      {!ready ? (
        <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-400">
          This level is planned but not written yet. ✍️
          <br />
          <strong>Level 1</strong> is fully built and shows how every level will work.
        </div>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {CATEGORIES.map((c) => {
            const has = categoryHasContent(level, c.key);
            const inner = (
              <div
                className={[
                  "h-full rounded-2xl border p-5 transition",
                  has
                    ? "border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-md"
                    : "border-slate-100 bg-slate-50 opacity-60",
                ].join(" ")}
              >
                <div className="text-3xl">{c.icon}</div>
                <h2 className="mt-2 font-semibold text-slate-800">{c.label}</h2>
                <p className="text-sm text-slate-500">{c.blurb}</p>
                {has ? (
                  <span className="mt-3 inline-block text-sm font-medium text-orange-500">
                    Practise →
                  </span>
                ) : (
                  <span className="mt-3 inline-block text-xs text-slate-400">soon</span>
                )}
              </div>
            );
            return has ? (
              <Link key={c.key} to={`/a1/${level.number}/${c.key}`}>
                {inner}
              </Link>
            ) : (
              <div key={c.key}>{inner}</div>
            );
          })}
        </div>
      )}
    </div>
  );
}
