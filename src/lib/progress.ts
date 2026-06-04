import { useCallback, useEffect, useState } from "react";
import type { CEFRLevel } from "../data/types";
import { lessonId } from "../data/lessons";

const STORAGE_KEY = "nl-leren-progress-v1";

interface ProgressState {
  /** Map of lesson id -> best score (0..1). */
  scores: Record<string, number>;
}

const PASS_THRESHOLD = 0.8;

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as ProgressState;
  } catch {
    // ignore corrupt storage
  }
  return { scores: {} };
}

function save(state: ProgressState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/** React hook exposing progress and helpers. */
export function useProgress() {
  const [state, setState] = useState<ProgressState>(load);

  useEffect(() => {
    save(state);
  }, [state]);

  const recordScore = useCallback((id: string, score: number) => {
    setState((prev) => {
      const best = Math.max(prev.scores[id] ?? 0, score);
      return { ...prev, scores: { ...prev.scores, [id]: best } };
    });
  }, []);

  const getScore = useCallback((id: string) => state.scores[id] ?? 0, [state]);

  const isCompleted = useCallback(
    (id: string) => (state.scores[id] ?? 0) >= PASS_THRESHOLD,
    [state],
  );

  /** A level is unlocked if it is the first one or the previous one is completed. */
  const isUnlocked = useCallback(
    (level: CEFRLevel, number: number) => {
      if (number <= 1) return true;
      return (state.scores[lessonId(level, number - 1)] ?? 0) >= PASS_THRESHOLD;
    },
    [state],
  );

  const reset = useCallback(() => setState({ scores: {} }), []);

  return { recordScore, getScore, isCompleted, isUnlocked, reset, PASS_THRESHOLD };
}
