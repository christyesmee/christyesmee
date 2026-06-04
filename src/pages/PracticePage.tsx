import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getA1Level } from "../data/a1/levels";
import { categoryHasContent, type Category, type LearningStyle } from "../data/types";
import { buildQuiz, type Question } from "../lib/quiz";
import { submitScore } from "../lib/cloud";
import { touchStreak } from "../lib/streak";
import { markCompleted } from "../lib/completion";
import StyleSelector from "../components/StyleSelector";
import QuestionRunner from "../components/QuestionRunner";
import { useAuthState, useScoreState, useSettingsState } from "../state";

const CATEGORY_LABEL: Record<Category, string> = {
  vocab: "Vocabulary",
  grammar: "Sentences",
  verbs: "Verbs",
};

export default function PracticePage() {
  const { num, category } = useParams<{ num: string; category: string }>();
  const navigate = useNavigate();
  const { user } = useAuthState();
  const { recordAnswer } = useScoreState();
  const { settings } = useSettingsState();

  const level = num ? getA1Level(Number(num)) : undefined;
  const cat = category as Category;

  const [styles, setStyles] = useState<LearningStyle[]>(["multiple-choice"]);
  const [quiz, setQuiz] = useState<Question[] | null>(null);

  if (!level || !["vocab", "grammar", "verbs"].includes(cat) || !categoryHasContent(level, cat)) {
    return <p className="p-10 text-center text-slate-500">Nothing to practise here.</p>;
  }

  const backTo = `/a1/${level.number}/practice`;

  function toggle(style: LearningStyle) {
    setStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style],
    );
  }

  function start() {
    setQuiz(buildQuiz(level!, cat, styles, settings.direction));
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Link to={backTo} className="text-sm text-orange-500 hover:underline">
        ← Practice
      </Link>
      <h1 className="mt-2 text-2xl font-bold text-slate-800">
        {CATEGORY_LABEL[cat]} — {level.topic}
      </h1>

      {!quiz ? (
        <>
          <p className="mt-1 text-slate-500">
            Pick one or more learning styles. With several selected, questions are mixed randomly.
          </p>
          <div className="mt-6">
            <StyleSelector selected={styles} onToggle={toggle} />
          </div>
          <button
            onClick={start}
            disabled={styles.length === 0}
            className="mt-6 w-full rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Start practice
          </button>
          <p className="mt-3 text-center text-xs text-slate-400">
            Direction: {settings.direction === "nl-en" ? "Dutch → English" : "English → Dutch"}
            {settings.strictMatching && " · strict spelling on"} — change in Settings.
          </p>
        </>
      ) : (
        <div className="mt-6">
          <QuestionRunner
            questions={quiz}
            strict={settings.strictMatching}
            recordAnswer={recordAnswer}
            onFinish={(points, correct) => {
              if (!user) return;
              submitScore(user, points);
              if (correct > 0) touchStreak(user);
              markCompleted(user, level.number, cat);
            }}
            onRestart={() => setQuiz(buildQuiz(level, cat, styles, settings.direction))}
            onExit={() => navigate(backTo)}
          />
        </div>
      )}
    </div>
  );
}
