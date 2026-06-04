import { Link, useParams } from "react-router-dom";
import { getA1Level } from "../data/a1/levels";
import { categoryHasContent, levelHasContent, type Category } from "../data/types";
import { getLevelProgress } from "../lib/completion";
import { useAuthState } from "../state";

const CATEGORIES: { key: Category; label: string; icon: string; blurb: string }[] = [
  { key: "vocab", label: "Vocabulary", icon: "📚", blurb: "25 words for this topic" },
  { key: "grammar", label: "Sentences", icon: "🧩", blurb: "Build sentences with structure" },
  { key: "verbs", label: "Verbs", icon: "🔧", blurb: "5 verbs, every form tested" },
];

export default function CategoryPage() {
  const { num } = useParams<{ num: string }>();
  const { user } = useAuthState();
  const level = num ? getA1Level(Number(num)) : undefined;

  if (!level || !levelHasContent(level)) {
    return <p className="p-10 text-center text-slate-500">Nothing to practise here.</p>;
  }

  const progress = user ? getLevelProgress(user, level.number) : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link to={`/a1/${level.number}`} className="text-sm text-orange-500 hover:underline">
        ← Level {level.number}
      </Link>
      <h1 className="mt-2 text-2xl font-bold text-slate-800">Practice — {level.topic}</h1>
      <p className="text-slate-500">Choose a category. Finish a session to complete it.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {CATEGORIES.map((c) => {
          const has = categoryHasContent(level, c.key);
          const done = progress ? progress[c.key] : false;
          const inner = (
            <div
              className={[
                "relative h-full rounded-2xl border p-5 transition",
                has
                  ? "border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-md"
                  : "border-slate-100 bg-slate-50 opacity-60",
              ].join(" ")}
            >
              {done && (
                <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  ✓
                </span>
              )}
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
            <Link key={c.key} to={`/a1/${level.number}/practice/${c.key}`}>
              {inner}
            </Link>
          ) : (
            <div key={c.key}>{inner}</div>
          );
        })}
      </div>
    </div>
  );
}
