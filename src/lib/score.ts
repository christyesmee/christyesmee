import { useCallback, useEffect, useState } from "react";

/** Points awarded for a correct answer and deducted for a wrong one. */
export const POINTS_CORRECT = 10;
export const POINTS_WRONG = -5;

export interface ScoreCard {
  totalPoints: number;
  correct: number;
  wrong: number;
}

const EMPTY: ScoreCard = { totalPoints: 0, correct: 0, wrong: 0 };

function storageKey(username: string): string {
  return `nl-score-${username}`;
}

function load(username: string): ScoreCard {
  try {
    const raw = localStorage.getItem(storageKey(username));
    if (raw) return { ...EMPTY, ...(JSON.parse(raw) as Partial<ScoreCard>) };
  } catch {
    // ignore corrupt storage
  }
  return EMPTY;
}

/** Per-user scorecard, persisted in localStorage. Mount one per logged-in user. */
export function useScore(username: string) {
  const [score, setScore] = useState<ScoreCard>(() => load(username));

  useEffect(() => {
    localStorage.setItem(storageKey(username), JSON.stringify(score));
  }, [username, score]);

  /** Record one answer. Returns the point delta applied (for UI feedback). */
  const recordAnswer = useCallback((isCorrect: boolean): number => {
    const delta = isCorrect ? POINTS_CORRECT : POINTS_WRONG;
    setScore((prev) => ({
      totalPoints: prev.totalPoints + delta,
      correct: prev.correct + (isCorrect ? 1 : 0),
      wrong: prev.wrong + (isCorrect ? 0 : 1),
    }));
    return delta;
  }, []);

  /** Overwrite the total (e.g. to sync from the cloud on login). */
  const setTotal = useCallback((totalPoints: number) => {
    setScore((prev) => ({ ...prev, totalPoints }));
  }, []);

  const reset = useCallback(() => setScore(EMPTY), []);

  return { score, recordAnswer, setTotal, reset };
}
