import { Link } from "react-router-dom";
import SettingsPanel from "../components/SettingsPanel";
import { A1_LEVEL_COUNT } from "../data/a1/levels";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-800">Learn Dutch the right way 🇳🇱</h1>
      <p className="mt-2 text-slate-500">
        Practise <strong>vocabulary</strong>, <strong>grammar</strong> and{" "}
        <strong>verbs</strong> — choose your learning style and earn points.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {/* A1 — active */}
        <Link
          to="/a1"
          className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-xl font-bold text-white">
            A1
          </div>
          <h2 className="text-lg font-semibold text-slate-800">Beginner</h2>
          <p className="text-sm text-slate-500">{A1_LEVEL_COUNT} levels</p>
          <span className="mt-3 inline-block text-sm font-medium text-orange-500 group-hover:underline">
            Start →
          </span>
        </Link>

        {/* A2 & B1 — locked / greyed out */}
        {["A2", "B1"].map((lvl) => (
          <div
            key={lvl}
            className="relative rounded-2xl border border-slate-100 bg-slate-50 p-6 opacity-70"
          >
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-300 text-xl font-bold text-white">
              {lvl}
            </div>
            <h2 className="text-lg font-semibold text-slate-500">
              {lvl === "A2" ? "Elementary" : "Intermediate"}
            </h2>
            <p className="text-sm text-slate-400">Coming soon</p>
            <span className="absolute right-4 top-4 text-lg">🔒</span>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
          Settings
        </h3>
        <SettingsPanel />
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-500">
        <p className="font-medium text-slate-700">How it works</p>
        <p className="mt-1">
          Each level has three categories — vocabulary, grammar and verbs. Pick one or more learning
          styles (typing, multiple choice, audio, flashcard) and they get mixed into your practice.
          Correct answers earn points; wrong ones lose points. Your score is saved in this browser.
        </p>
      </div>
    </div>
  );
}
