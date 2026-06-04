// Daily streak tracking, per user.
// Rules:
//  - Practising (scoring points) on a day counts that day.
//  - Consecutive days increase the streak by 1.
//  - Missing exactly one day deducts 1 from the streak (with a "you missed a
//    day" warning).
//  - Missing two or more days resets the streak to 0.

interface StreakData {
  streak: number;
  lastActiveDay: string | null; // "YYYY-MM-DD"
}

export type StreakState = "none" | "active" | "pending" | "missed-one" | "lost";

export interface StreakInfo {
  streak: number;
  state: StreakState;
  message: string;
}

function key(username: string): string {
  return `nl-streak-${username}`;
}

function load(username: string): StreakData {
  try {
    const raw = localStorage.getItem(key(username));
    if (raw) return JSON.parse(raw) as StreakData;
  } catch {
    // ignore
  }
  return { streak: 0, lastActiveDay: null };
}

function save(username: string, data: StreakData): void {
  try {
    localStorage.setItem(key(username), JSON.stringify(data));
  } catch {
    // ignore
  }
}

export function isoDay(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function parseDay(s: string): number {
  const [y, m, d] = s.split("-").map(Number);
  return Date.UTC(y, m - 1, d);
}

function dayDiff(today: string, last: string): number {
  return Math.round((parseDay(today) - parseDay(last)) / 86_400_000);
}

/** Call when the user has practised and scored today. Updates the stored streak. */
export function touchStreak(username: string): void {
  const today = isoDay();
  const data = load(username);

  if (data.lastActiveDay === today) return; // already counted today

  let streak: number;
  if (!data.lastActiveDay) {
    streak = 1;
  } else {
    const gap = dayDiff(today, data.lastActiveDay);
    if (gap <= 0) return; // clock oddity — ignore
    if (gap === 1) streak = data.streak + 1; // consecutive day
    else if (gap === 2) streak = Math.max(1, data.streak - 1); // missed one day
    else streak = 1; // missed two+ days: streak lost, start over
  }

  save(username, { streak, lastActiveDay: today });
}

/** Read-only streak status for display (does not modify storage). */
export function getStreakInfo(username: string): StreakInfo {
  const data = load(username);
  if (!data.lastActiveDay || data.streak === 0) {
    return { streak: 0, state: "none", message: "Practise today to start a streak!" };
  }

  const gap = dayDiff(isoDay(), data.lastActiveDay);

  if (gap <= 0) {
    return { streak: data.streak, state: "active", message: "You practised today — nice! 🔥" };
  }
  if (gap === 1) {
    return {
      streak: data.streak,
      state: "pending",
      message: "Practise today to keep your streak alive!",
    };
  }
  if (gap === 2) {
    return {
      streak: Math.max(0, data.streak - 1),
      state: "missed-one",
      message: "You missed a day — your streak dropped by 1. Don't miss another!",
    };
  }
  return { streak: 0, state: "lost", message: "Streak lost 💔 — start a new one today!" };
}
