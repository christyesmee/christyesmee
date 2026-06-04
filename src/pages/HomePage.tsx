import { Link } from "react-router-dom";
import { CEFR_LEVELS } from "../data/catalog";

const levelInfo: Record<string, { label: string; color: string }> = {
  A1: { label: "Beginner", color: "from-emerald-400 to-emerald-600" },
  A2: { label: "Elementary", color: "from-sky-400 to-sky-600" },
  B1: { label: "Intermediate", color: "from-violet-400 to-violet-600" },
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-800">Learn Dutch the right way 🇳🇱</h1>
      <p className="mt-2 text-slate-500">
        Vocabulary, grammar and verbs (stem + endings) — split into clear levels. Choose where to
        start.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {CEFR_LEVELS.map((level) => (
          <Link
            key={level}
            to={`/level/${level}`}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div
              className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${levelInfo[level].color} text-xl font-bold text-white`}
            >
              {level}
            </div>
            <h2 className="text-lg font-semibold text-slate-800">{levelInfo[level].label}</h2>
            <p className="text-sm text-slate-500">10 levels</p>
            <span className="mt-3 inline-block text-sm font-medium text-orange-500 group-hover:underline">
              Start →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-500">
        <p className="font-medium text-slate-700">How it works</p>
        <p className="mt-1">
          Each level mixes <strong>vocabulary</strong>, <strong>grammar</strong> and{" "}
          <strong>verbs</strong>. Finish the practice quiz with at least 80% to unlock the next
          level. Your progress is saved in this browser.
        </p>
      </div>
    </div>
  );
}
