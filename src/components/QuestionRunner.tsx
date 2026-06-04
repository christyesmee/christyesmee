import { useEffect, useMemo, useState } from "react";
import type { Question } from "../lib/quiz";
import { isAnswerCorrect } from "../lib/match";
import { speakDutch } from "../lib/tts";
import { POINTS_CORRECT, POINTS_WRONG } from "../lib/score";

interface Props {
  questions: Question[];
  strict: boolean;
  /** Update the global scorecard; returns the point delta. */
  recordAnswer: (correct: boolean) => number;
  onRestart: () => void;
  onExit: () => void;
}

export default function QuestionRunner({
  questions,
  strict,
  recordAnswer,
  onRestart,
  onExit,
}: Props) {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [picked, setPicked] = useState<string | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [checked, setChecked] = useState(false);
  const [wasCorrect, setWasCorrect] = useState(false);
  const [points, setPoints] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [done, setDone] = useState(false);

  const current = questions[index];
  const isLast = index === questions.length - 1;

  // Auto-play audio questions when they appear.
  useEffect(() => {
    if (current && current.style === "audio" && current.audioText) {
      speakDutch(current.audioText);
    }
  }, [index, current]);

  const canCheck = useMemo(() => {
    if (!current) return false;
    if (current.style === "multiple-choice") return picked !== null;
    return input.trim().length > 0;
  }, [current, picked, input]);

  if (!current) return null;

  function commit(isCorrect: boolean) {
    const delta = recordAnswer(isCorrect);
    setWasCorrect(isCorrect);
    setPoints((p) => p + delta);
    if (isCorrect) setCorrect((c) => c + 1);
    else setWrong((w) => w + 1);
    setChecked(true);
  }

  function check() {
    const given = current.style === "multiple-choice" ? (picked ?? "") : input;
    commit(isAnswerCorrect(given, current.answer, current.alternates, strict));
  }

  function rateFlashcard(knew: boolean) {
    commit(knew);
  }

  function next() {
    if (isLast) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setInput("");
    setPicked(null);
    setFlipped(false);
    setChecked(false);
  }

  if (done) {
    const total = correct + wrong;
    const accuracy = total ? Math.round((correct / total) * 100) : 0;
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm uppercase tracking-wide text-slate-400">Session complete</p>
        <p className={`my-2 text-4xl font-bold ${points >= 0 ? "text-green-600" : "text-rose-600"}`}>
          {points >= 0 ? "+" : ""}
          {points} pts
        </p>
        <p className="text-slate-500">
          {correct} correct · {wrong} wrong · {accuracy}% accuracy
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={onRestart}
            className="rounded-lg bg-orange-500 px-5 py-2 font-medium text-white transition hover:bg-orange-600"
          >
            Practice again
          </button>
          <button
            onClick={onExit}
            className="rounded-lg border border-slate-300 px-5 py-2 font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* progress + running score */}
      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="text-slate-400">
          {index + 1} / {questions.length}
        </span>
        <span className="flex items-center gap-3">
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs capitalize text-slate-500">
            {current.style.replace("-", " ")}
          </span>
          <span className={`font-semibold ${points >= 0 ? "text-green-600" : "text-rose-600"}`}>
            {points >= 0 ? "+" : ""}
            {points}
          </span>
        </span>
      </div>

      <p className="text-xs font-medium uppercase tracking-wide text-orange-500">
        {current.instruction}
      </p>

      {/* ---- Flashcard ---- */}
      {current.style === "flashcard" ? (
        <div className="mt-3">
          <button
            onClick={() => setFlipped((f) => !f)}
            className="flex h-40 w-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-4 text-center transition hover:bg-slate-100"
          >
            <span className="text-2xl font-semibold text-slate-800">
              {flipped ? current.flashBack : current.flashFront}
            </span>
            <span className="mt-2 text-xs text-slate-400">
              {flipped ? "back" : "front — tap to flip"}
            </span>
          </button>
          {flipped && !checked && (
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                onClick={() => rateFlashcard(false)}
                className="rounded-lg border border-rose-300 bg-rose-50 px-4 py-2 font-medium text-rose-700 transition hover:bg-rose-100"
              >
                Didn't know ({POINTS_WRONG})
              </button>
              <button
                onClick={() => rateFlashcard(true)}
                className="rounded-lg border border-green-300 bg-green-50 px-4 py-2 font-medium text-green-700 transition hover:bg-green-100"
              >
                I knew it (+{POINTS_CORRECT})
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          {/* ---- Prompt (with audio replay) ---- */}
          <div className="mt-3 flex items-center gap-3">
            <p className="text-2xl font-semibold text-slate-800">{current.prompt}</p>
            {current.style === "audio" && (
              <button
                onClick={() => current.audioText && speakDutch(current.audioText)}
                className="rounded-lg bg-orange-100 px-3 py-1.5 text-sm font-medium text-orange-700 transition hover:bg-orange-200"
              >
                ▶ Play
              </button>
            )}
          </div>

          {/* ---- Answer input ---- */}
          <div className="mt-4">
            {current.style === "multiple-choice" && current.options ? (
              <div className="space-y-2">
                {current.options.map((opt) => {
                  const isAnswer = opt.toLowerCase() === current.answer.toLowerCase();
                  return (
                    <button
                      key={opt}
                      disabled={checked}
                      onClick={() => setPicked(opt)}
                      className={[
                        "block w-full rounded-lg border px-4 py-2 text-left transition",
                        checked && isAnswer
                          ? "border-green-400 bg-green-50 text-green-800"
                          : checked && picked === opt
                            ? "border-rose-400 bg-rose-50 text-rose-800"
                            : picked === opt
                              ? "border-orange-400 bg-orange-50"
                              : "border-slate-200 hover:border-slate-300",
                      ].join(" ")}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            ) : (
              <input
                autoFocus
                type="text"
                value={input}
                disabled={checked}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (checked ? next() : canCheck && check())}
                placeholder="Type your answer…"
                className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
            )}
          </div>
        </>
      )}

      {/* ---- Feedback ---- */}
      {checked && (
        <div
          className={[
            "mt-4 rounded-lg px-4 py-3 text-sm",
            wasCorrect ? "bg-green-50 text-green-800" : "bg-rose-50 text-rose-800",
          ].join(" ")}
        >
          <p className="font-medium">
            {wasCorrect
              ? `Correct! +${POINTS_CORRECT}`
              : `Not quite (${POINTS_WRONG}) — answer: "${current.answer}"`}
          </p>
        </div>
      )}

      {/* ---- Footer buttons ---- */}
      {current.style !== "flashcard" && (
        <div className="mt-5 flex justify-end">
          {!checked ? (
            <button
              onClick={check}
              disabled={!canCheck}
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
      )}

      {checked && current.style === "flashcard" && (
        <div className="mt-5 flex justify-end">
          <button
            onClick={next}
            className="rounded-lg bg-slate-800 px-5 py-2 font-medium text-white transition hover:bg-slate-900"
          >
            {isLast ? "See results" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}
