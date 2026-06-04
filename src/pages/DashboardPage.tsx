import { Link } from "react-router-dom";
import { useAuthState, useScoreState } from "../state";
import { displayName } from "../lib/auth";
import { getLastLevel } from "../lib/userProgress";

function Stat({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
      <p className={`text-2xl font-bold ${accent ?? "text-slate-800"}`}>{value}</p>
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
    </div>
  );
}

export default function DashboardPage() {
  const { user } = useAuthState();
  const { score } = useScoreState();
  const answered = score.correct + score.wrong;
  const accuracy = answered ? Math.round((score.correct / answered) * 100) : 0;
  const lastLevel = user ? getLastLevel(user) : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-800">
        Welcome back, {user ? displayName(user) : "there"}! 👋
      </h1>
      <p className="mt-1 text-slate-500">Here's how you're doing so far.</p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Points" value={String(score.totalPoints)} accent="text-amber-600" />
        <Stat label="Accuracy" value={`${accuracy}%`} accent="text-emerald-600" />
        <Stat label="Correct" value={String(score.correct)} accent="text-green-600" />
        <Stat label="Wrong" value={String(score.wrong)} accent="text-rose-600" />
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-lg font-medium text-slate-700">Ready to practise?</p>
        <Link
          to="/learn"
          className="rounded-xl bg-orange-500 px-8 py-3 text-lg font-semibold text-white transition hover:bg-orange-600"
        >
          Start learning →
        </Link>
        {lastLevel && (
          <Link to={`/a1/${lastLevel}`} className="text-sm text-orange-500 hover:underline">
            …or continue where you left off — Level {lastLevel}
          </Link>
        )}
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          to="/leaderboard"
          className="text-sm font-medium text-slate-500 hover:text-orange-500"
        >
          🏆 See the leaderboard
        </Link>
      </div>
    </div>
  );
}
