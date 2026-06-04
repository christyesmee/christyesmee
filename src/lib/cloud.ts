// Cloud sync for the shared leaderboard, backed by Supabase (PostgREST).
// Reads config from Vite env vars; if they're missing, the app falls back to
// local-only mode and the leaderboard explains how to enable cloud sync.

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const cloudEnabled = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

const TABLE = "score_events";

export interface ScoreEvent {
  username: string;
  points: number;
  created_at: string;
}

function headers(extra: Record<string, string> = {}): Record<string, string> {
  return {
    apikey: SUPABASE_ANON_KEY as string,
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    "Content-Type": "application/json",
    ...extra,
  };
}

/** Record points earned in a practice session (fire-and-forget). */
export async function submitScore(username: string, points: number): Promise<void> {
  if (!cloudEnabled || points === 0) return;
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}`, {
      method: "POST",
      headers: headers({ Prefer: "return=minimal" }),
      body: JSON.stringify({ username, points }),
    });
  } catch {
    // offline / not configured — leaderboard will catch up later
  }
}

/** Fetch all score events (small dataset for a 3-person app). */
export async function fetchEvents(): Promise<ScoreEvent[]> {
  if (!cloudEnabled) return [];
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/${TABLE}?select=username,points,created_at&order=created_at.desc`,
      { headers: headers() },
    );
    if (!res.ok) return [];
    return (await res.json()) as ScoreEvent[];
  } catch {
    return [];
  }
}

/** Sum of all points a user has earned (used to seed local total on login). */
export async function fetchUserTotal(username: string): Promise<number | null> {
  if (!cloudEnabled) return null;
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/${TABLE}?select=points&username=eq.${encodeURIComponent(username)}`,
      { headers: headers() },
    );
    if (!res.ok) return null;
    const rows = (await res.json()) as { points: number }[];
    return rows.reduce((sum, r) => sum + (r.points ?? 0), 0);
  } catch {
    return null;
  }
}
