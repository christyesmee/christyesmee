import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ALLOWED_USERS, displayName } from "../lib/auth";
import { cloudEnabled, fetchEvents, type ScoreEvent } from "../lib/cloud";
import { useAuthState, useScoreState } from "../state";

type Window = "day" | "week" | "month" | "all";

const TABS: { key: Window; label: string }[] = [
  { key: "day", label: "Today" },
  { key: "week", label: "This week" },
  { key: "month", label: "This month" },
  { key: "all", label: "All time" },
];

function windowStart(w: Window): number {
  const now = new Date();
  if (w === "all") return 0;
  if (w === "day") return new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  if (w === "month") return new Date(now.getFullYear(), now.getMonth(), 1).getTime();
  // week: back to Monday
  const day = (now.getDay() + 6) % 7; // 0 = Monday
  const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - day);
  return monday.getTime();
}

const MEDALS = ["🥇", "🥈", "🥉"];

export default function LeaderboardPage() {
  const { user } = useAuthState();
  const { score } = useScoreState();
  const [tab, setTab] = useState<Window>("day");
  const [events, setEvents] = useState<ScoreEvent[]>([]);
  const [loading, setLoading] = useState(cloudEnabled);

  useEffect(() => {
    if (!cloudEnabled) return;
    let active = true;
    setLoading(true);
    fetchEvents().then((rows) => {
      if (active) {
        setEvents(rows);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  const ranking = useMemo(() => {
    const start = windowStart(tab);
    const totals: Record<string, number> = {};
    ALLOWED_USERS.forEach((u) => (totals[u] = 0));
    events.forEach((e) => {
      if (new Date(e.created_at).getTime() >= start && e.username in totals) {
        totals[e.username] += e.points;
      }
    });
    return ALLOWED_USERS.map((u) => ({ username: u, points: totals[u] })).sort(
      (a, b) => b.points - a.points,
    );
  }, [events, tab]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Link to="/" className="text-sm text-orange-500 hover:underline">
        ← Home
      </Link>
      <h1 className="mt-2 text-2xl font-bold text-slate-800">🏆 Leaderboard</h1>
      <p className="text-slate-500">See who's winning — today, this week and this month.</p>

      {!cloudEnabled ? (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
            Cloud leaderboard isn't configured yet, so this only shows your own score on this
            device. Follow the Supabase + Netlify steps in <strong>DEPLOY.md</strong> to enable the
            shared leaderboard.
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-800">
                {user ? displayName(user) : "You"}
              </span>
              <span className="font-semibold text-amber-600">{score.totalPoints} pts</span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mt-6 flex flex-wrap gap-2">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={[
                  "rounded-full px-4 py-1.5 text-sm font-medium transition",
                  tab === t.key
                    ? "bg-orange-500 text-white"
                    : "bg-white text-slate-500 ring-1 ring-slate-200 hover:bg-slate-50",
                ].join(" ")}
              >
                {t.label}
              </button>
            ))}
          </div>

          {loading ? (
            <p className="mt-8 text-center text-slate-400">Loading scores…</p>
          ) : (
            <ol className="mt-4 space-y-2">
              {ranking.map((row, i) => {
                const isMe = row.username === user;
                return (
                  <li
                    key={row.username}
                    className={[
                      "flex items-center gap-4 rounded-xl border p-4",
                      isMe ? "border-orange-300 bg-orange-50" : "border-slate-200 bg-white",
                    ].join(" ")}
                  >
                    <span className="w-7 text-center text-xl">{MEDALS[i] ?? i + 1}</span>
                    <span className="flex-1 font-medium text-slate-800">
                      {displayName(row.username)}
                      {isMe && <span className="ml-2 text-xs text-orange-500">(you)</span>}
                    </span>
                    <span className="font-semibold text-slate-700">{row.points} pts</span>
                  </li>
                );
              })}
            </ol>
          )}
        </>
      )}
    </div>
  );
}
