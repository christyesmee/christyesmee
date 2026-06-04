import type { GrammarRule } from "../data/types";

/** Renders a grammar rule: title, explanation and worked examples. */
export default function GrammarCard({ rule }: { rule: GrammarRule }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h4 className="text-lg font-semibold text-slate-800">{rule.title}</h4>
      <p className="mt-1 text-sm text-slate-600">{rule.explanation}</p>
      <ul className="mt-3 space-y-1">
        {rule.examples.map((ex, i) => (
          <li key={i} className="flex flex-wrap gap-x-2 text-sm">
            <span className="font-medium text-slate-800">{ex.dutch}</span>
            <span className="text-slate-400">— {ex.english}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
