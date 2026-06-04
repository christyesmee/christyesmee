import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "nl-leren-score-v1";

/** Points awarded for a correct answer and deducted for a wrong one. */
export const POINTS_CORRECT = 10;
export const POINTS_WRONG = -5;

export interface ScoreCard {
  totalPoints: number;
  correct: number;
  wrong: number;
}

const EMPTY: ScoreCard = { totalPoints: 0, correct: 0, wrong: 0 };

function load(): ScoreCard {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...EMPTY, ...(JSON.parse(raw) as Partial<ScoreCard>) };
  } catch {
    // ignore corrupt storage
  }
  return EMPTY;
}

export function useScore() {
  const [score, setScore] = useState<ScoreCard>(load);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(score));
  }, [score]);

  /** Record one answer. Returns the point delta applied (for UI feedback). */
  const recordAnswer = useCallback((isCorrect: boolean): number => {
    const delta = isCorrect ? POINTS_CORRECT : POINTS_WRONG;
    setScore((prev) => ({
      totalPoints: Math.max(0, prev.totalPoints + delta),
      correct: prev.correct + (isCorrect ? 1 : 0),
      wrong: prev.wrong + (isCorrect ? 0 : 1),
    }));
    return delta;
  }, []);

  const reset = useCallback(() => setScore(EMPTY), []);

  return { score, recordAnswer, reset };
}
