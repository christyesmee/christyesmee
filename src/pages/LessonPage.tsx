import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getLesson, lessonHasContent } from "../data/lessons";
import { useProgress } from "../lib/progress";
import Flashcard from "../components/Flashcard";
import GrammarCard from "../components/GrammarCard";
import VerbTable from "../components/VerbTable";
import Quiz from "../components/Quiz";

type Tab = "vocab" | "grammar" | "verbs" | "practice";

export default function LessonPage() {
  const { id } = useParams<{ id: string }>();
  const lesson = id ? getLesson(id) : undefined;
  const { recordScore } = useProgress();
  const [tab, setTab] = useState<Tab>("vocab");

  if (!lesson) {
    return <p className="p-10 text-center text-slate-500">Lesson not found.</p>;
  }

  if (!lessonHasContent(lesson)) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <Link to={`/level/${lesson.level}`} className="text-sm text-orange-500 hover:underline">
          ← Back to level {lesson.level}
        </Link>
        <h1 className="mt-2 text-2xl font-bold text-slate-800">{lesson.title}</h1>
        <p className="text-slate-500">{lesson.theme}</p>
        <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-400">
          This lesson is planned but not written yet. ✍️
          <br />
          The full content for <strong>A1 — Level 1</strong> shows how every lesson will look.
        </div>
      </div>
    );
  }

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "vocab", label: "Vocabulary", count: lesson.vocabulary.length },
    { key: "grammar", label: "Grammar", count: lesson.grammar.length },
    { key: "verbs", label: "Verbs", count: lesson.verbs.length },
    { key: "practice", label: "Practice", count: lesson.exercises.length },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link to={`/level/${lesson.level}`} className="text-sm text-orange-500 hover:underline">
        ← Back to level {lesson.level}
      </Link>
      <h1 className="mt-2 text-2xl font-bold text-slate-800">{lesson.title}</h1>
      <p className="text-slate-500">{lesson.theme}</p>

      <div className="mt-6 flex flex-wrap gap-2 border-b border-slate-200">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={[
              "rounded-t-lg px-4 py-2 text-sm font-medium transition",
              tab === t.key
                ? "border-b-2 border-orange-500 text-orange-600"
                : "text-slate-500 hover:text-slate-700",
            ].join(" ")}
          >
            {t.label}{" "}
            <span className="ml-1 rounded-full bg-slate-100 px-1.5 text-xs text-slate-400">
              {t.count}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6">
        {tab === "vocab" && (
          <div className="grid gap-3 sm:grid-cols-2">
            {lesson.vocabulary.map((item) => (
              <Flashcard key={item.dutch} item={item} />
            ))}
          </div>
        )}

        {tab === "grammar" && (
          <div className="space-y-4">
            {lesson.grammar.map((rule) => (
              <GrammarCard key={rule.title} rule={rule} />
            ))}
          </div>
        )}

        {tab === "verbs" && (
          <div className="space-y-4">
            {lesson.verbs.map((verb) => (
              <VerbTable key={verb.infinitive} verb={verb} />
            ))}
          </div>
        )}

        {tab === "practice" && (
          <Quiz exercises={lesson.exercises} onComplete={(score) => recordScore(lesson.id, score)} />
        )}
      </div>
    </div>
  );
}
