import { useMemo, useState } from "react";
import type { Exercise } from "../data/types";

interface QuizProps {
  exercises: Exercise[];
  onComplete: (score: number) => void;
}

function normalize(s: string) {
  return s.trim().toLowerCase().replace(/\s+/g, " ").replace(/[.!?]+$/, "");
}

/** A multi-question quiz. Supports multiple-choice, fill-blank and translate.
 *  Reports the final score (0..1) through onComplete. */
export default function Quiz({ exercises, onComplete }: QuizProps) {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = exercises[index];
  const isLast = index === exercises.length - 1;

  const isCorrect = useMemo(() => {
    if (!checked) return false;
    return normalize(input) === normalize(current.answer);
  }, [checked, input, current]);

  function check() {
    if (!input.trim()) return;
    const correct = normalize(input) === normalize(current.answer);
    if (correct) setCorrectCount((c) => c + 1);
    setChecked(true);
  }

  function next() {
    if (isLast) {
      setFinished(true);
      onComplete(correctCount / exercises.length);
      return;
    }
    setIndex((i) => i + 1);
    setInput("");
    setChecked(false);
  }

  function restart() {
    setIndex(0);
    setInput("");
    setChecked(false);
    setCorrectCount(0);
    setFinished(false);
  }

  if (finished) {
    const pct = Math.round((correctCount / exercises.length) * 100);
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
        <p className="text-sm uppercase tracking-wide text-slate-400">Your score</p>
        <p className="my-2 text-4xl font-bold text-slate-800">{pct}%</p>
        <p className="text-slate-500">
          {correctCount} / {exercises.length} correct
        </p>
        <p className="mt-2 text-sm">
          {pct >= 80 ? "🎉 Passed! Next level unlocked." : "Keep practising — you need 80% to pass."}
        </p>
        <button
          onClick={restart}
          className="mt-4 rounded-lg bg-orange-500 px-4 py-2 font-medium text-white transition hover:bg-orange-600"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
        <span>
          Question {index + 1} / {exercises.length}
        </span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs">{current.type}</span>
      </div>

      <p className="text-lg font-medium text-slate-800">{current.question}</p>
      {current.hint && <p className="mt-1 text-sm text-slate-400">Hint: {current.hint}</p>}

      <div className="mt-4 space-y-2">
        {current.type === "multiple-choice" && current.options ? (
          current.options.map((opt) => {
            const selected = input === opt;
            const showResult = checked;
            const isAnswer = normalize(opt) === normalize(current.answer);
            return (
              <button
                key={opt}
                disabled={checked}
                onClick={() => setInput(opt)}
                className={[
                  "block w-full rounded-lg border px-4 py-2 text-left transition",
                  showResult && isAnswer
                    ? "border-green-400 bg-green-50 text-green-800"
                    : showResult && selected
                      ? "border-rose-400 bg-rose-50 text-rose-800"
                      : selected
                        ? "border-orange-400 bg-orange-50"
                        : "border-slate-200 hover:border-slate-300",
                ].join(" ")}
              >
                {opt}
              </button>
            );
          })
        ) : (
          <input
            type="text"
            value={input}
            disabled={checked}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (checked ? next() : check())}
            placeholder="Type your answer…"
            className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
          />
        )}
      </div>

      {checked && (
        <div
          className={[
            "mt-4 rounded-lg px-4 py-3 text-sm",
            isCorrect ? "bg-green-50 text-green-800" : "bg-rose-50 text-rose-800",
          ].join(" ")}
        >
          <p className="font-medium">
            {isCorrect ? "Correct!" : `Not quite — the answer is "${current.answer}".`}
          </p>
          {current.explanation && <p className="mt-1 text-slate-600">{current.explanation}</p>}
        </div>
      )}

      <div className="mt-5 flex justify-end">
        {!checked ? (
          <button
            onClick={check}
            disabled={!input.trim()}
            className="rounded-lg bg-orange-500 px-5 py-2 font-medium text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Check
          </button>
        ) : (
          <button
            onClick={next}
            className="rounded-lg bg-slate-800 px-5 py-2 font-medium text-white transition hover:bg-slate-900"
          >
            {isLast ? "See results" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
}
