import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getA1Level } from "../data/a1/levels";
import { levelHasContent } from "../data/types";
import { speakDutch } from "../lib/tts";

export default function TheoryPage() {
  const { num } = useParams<{ num: string }>();
  const navigate = useNavigate();
  const level = num ? getA1Level(Number(num)) : undefined;
  const [page, setPage] = useState(0);

  if (!level || !levelHasContent(level)) {
    return <p className="p-10 text-center text-slate-500">Nothing to read here.</p>;
  }

  const practiceUrl = `/a1/${level.number}/practice`;

  // Page 1: intro + vocabulary, Page 2: verbs, Page 3: sentences.
  const pages = [
    {
      title: "Words",
      body: (
        <div>
          <p className="mb-4 text-slate-600">
            This level is about <strong>{level.topic.toLowerCase()}</strong>. Here are the{" "}
            {level.vocab.length} words. Tap a word to hear it.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {level.vocab.map((v) => {
              const dutch = v.article ? `${v.article} ${v.dutch}` : v.dutch;
              const english = v.article ? `the ${v.english}` : v.english;
              return (
                <button
                  key={v.dutch}
                  onClick={() => speakDutch(dutch)}
                  className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-left transition hover:bg-slate-50"
                >
                  <span className="font-medium text-slate-800">
                    {v.article && <span className="text-orange-500">{v.article} </span>}
                    {v.dutch}
                  </span>
                  <span className="text-sm text-slate-400">{english}</span>
                </button>
              );
            })}
          </div>
        </div>
      ),
    },
    {
      title: "Verbs",
      body: (
        <div>
          <p className="mb-4 text-slate-600">
            Dutch verbs are built from a <strong>stem</strong> (the infinitive minus -en). With{" "}
            <em>ik</em> you use the stem; with <em>jij/hij</em> you add -t; with <em>wij</em> you use
            the infinitive.
          </p>
          <div className="space-y-4">
            {level.verbs.map((verb) => (
              <div key={verb.infinitive} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="mb-2 flex items-baseline gap-2">
                  <h3 className="text-lg font-semibold text-slate-800">{verb.infinitive}</h3>
                  <span className="text-sm text-slate-500">{verb.english}</span>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {verb.forms.map((f) => (
                      <tr key={f.pronoun} className="border-t border-slate-100">
                        <td className="py-1 pr-3 text-slate-500">{f.pronoun}</td>
                        <td className="py-1 pr-3 font-medium text-slate-800">{f.dutch}</td>
                        <td className="py-1 text-right text-slate-400">{f.english}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Sentences",
      body: (
        <div>
          <p className="mb-4 text-slate-600">
            Now put the words together. Dutch keeps the verb in <strong>second position</strong>:
            subject + verb + the rest. Study these patterns, then practise building them yourself.
          </p>
          <div className="space-y-4">
            {level.grammar.map((g) => (
              <div key={g.id} className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="font-semibold text-slate-800">{g.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{g.explanation}</p>
                <ul className="mt-3 space-y-1">
                  {g.sentences.slice(0, 5).map((s) => (
                    <li key={s.dutch} className="flex flex-wrap gap-x-2 text-sm">
                      <span className="font-medium text-slate-800">{s.dutch}</span>
                      <span className="text-slate-400">— {s.english}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  const isLast = page === pages.length - 1;
  const current = pages[page];

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Link to={`/a1/${level.number}`} className="text-sm text-orange-500 hover:underline">
        ← Level {level.number}
      </Link>
      <div className="mt-2 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">
          Theory — {current.title}
        </h1>
        <span className="text-sm text-slate-400">
          Page {page + 1} / {pages.length}
        </span>
      </div>

      <div className="mt-6">{current.body}</div>

      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← Back
        </button>
        {!isLast ? (
          <button
            onClick={() => setPage((p) => p + 1)}
            className="rounded-lg bg-slate-800 px-5 py-2 font-medium text-white transition hover:bg-slate-900"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={() => navigate(practiceUrl)}
            className="rounded-lg bg-orange-500 px-5 py-2 font-semibold text-white transition hover:bg-orange-600"
          >
            Start practice →
          </button>
        )}
      </div>
    </div>
  );
}
