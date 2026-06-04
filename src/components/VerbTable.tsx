import type { VerbConjugation } from "../data/types";

/** Shows a verb broken down into stem + endings — the core idea of Dutch
 *  present-tense conjugation (infinitive minus -en = stem). */
export default function VerbTable({ verb }: { verb: VerbConjugation }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h4 className="text-lg font-semibold text-slate-800">{verb.infinitive}</h4>
        <span className="text-sm text-slate-500">{verb.english}</span>
        {verb.irregular && (
          <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-medium text-rose-600">
            irregular
          </span>
        )}
      </div>

      {verb.stem !== "—" && (
        <p className="mb-3 rounded-lg bg-orange-50 px-3 py-2 text-sm text-orange-800">
          Stem: <span className="font-mono font-semibold">{verb.stem}</span>{" "}
          <span className="text-orange-500">
            ({verb.infinitive} − en = {verb.stem})
          </span>
        </p>
      )}

      <table className="w-full text-sm">
        <tbody>
          {verb.forms.map((f) => (
            <tr key={f.pronoun} className="border-t border-slate-100">
              <td className="py-1.5 pr-3 text-slate-500">{f.pronoun}</td>
              <td className="py-1.5 pr-3 font-medium text-slate-800">{f.form}</td>
              <td className="py-1.5 text-right text-xs text-slate-400">{f.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
