import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getA1Level } from "../data/a1/levels";
import { levelHasContent } from "../data/types";
import { setLastLevel } from "../lib/userProgress";
import { getLevelProgress } from "../lib/completion";
import { useAuthState } from "../state";
import CompletionRing from "../components/CompletionRing";

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
  const progress = user ? getLevelProgress(user, level.number) : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link to="/a1" className="text-sm text-orange-500 hover:underline">
        ← All A1 levels
      </Link>

      <div className="mt-2 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-orange-500">
            Level {level.number}
          </p>
          <h1 className="text-2xl font-bold text-slate-800">{level.topic}</h1>
        </div>
        {progress && (
          <CompletionRing fraction={progress.fraction} size={56} label={`${progress.count}/3`} />
        )}
      </div>

      {!ready ? (
        <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-400">
          This level is planned but not written yet. ✍️
        </div>
      ) : (
        <>
          <p className="mt-3 text-slate-600">
            In this level you'll learn <strong>{level.vocab.length} words</strong>,{" "}
            <strong>{level.verbs.length} verbs</strong>, and how to build sentences about{" "}
            <strong>{level.topic.toLowerCase()}</strong>. Start with the theory, then practise.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              to={`/a1/${level.number}/theory`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-4xl">📖</div>
              <h2 className="mt-2 text-lg font-semibold text-slate-800">Learn theory</h2>
              <p className="text-sm text-slate-500">
                See all the words and short explanations to get ready.
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-orange-500 group-hover:underline">
                Read →
              </span>
            </Link>

            <Link
              to={`/a1/${level.number}/practice`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-4xl">✏️</div>
              <h2 className="mt-2 text-lg font-semibold text-slate-800">Practice</h2>
              <p className="text-sm text-slate-500">
                Train vocabulary, sentences and verbs — and earn points.
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-orange-500 group-hover:underline">
                Practise →
              </span>
            </Link>
          </div>

          {progress && progress.count > 0 && (
            <p className="mt-4 text-center text-sm text-slate-400">
              {progress.count === 3
                ? "🎉 Level complete — all three categories practised!"
                : `Completed ${progress.count} of 3 categories.`}
            </p>
          )}
        </>
      )}
    </div>
  );
}
