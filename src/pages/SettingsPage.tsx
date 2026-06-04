import { Link } from "react-router-dom";
import SettingsPanel from "../components/SettingsPanel";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Link to="/" className="text-sm text-orange-500 hover:underline">
        ← Dashboard
      </Link>
      <h1 className="mt-2 text-2xl font-bold text-slate-800">⚙️ Settings</h1>

      <div className="mt-6">
        <SettingsPanel />
      </div>

      <div className="mt-8">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
          How it works
        </h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
          <p>
            Each level has three categories — <strong>vocabulary</strong>,{" "}
            <strong>grammar</strong> and <strong>verbs</strong>. Pick one or more learning styles
            (typing, multiple choice, audio, flashcard) and they get mixed into your practice.
          </p>
          <p className="mt-2">
            Correct answers earn <strong>+10</strong> points; wrong ones lose <strong>5</strong>.
            Your score and progress are saved per user and shared on the leaderboard.
          </p>
        </div>
      </div>
    </div>
  );
}
