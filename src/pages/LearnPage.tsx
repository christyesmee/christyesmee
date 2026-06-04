import { Link } from "react-router-dom";
import { A1_LEVEL_COUNT } from "../data/a1/levels";

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link to="/" className="text-sm text-orange-500 hover:underline">
        ← Dashboard
      </Link>
      <h1 className="mt-2 text-3xl font-bold text-slate-800">Choose your level</h1>
      <p className="mt-1 text-slate-500">Start with A1. A2 and B1 unlock later.</p>

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
    </div>
  );
}
