import { createContext, useContext, type ReactNode } from "react";
import { useScore } from "./lib/score";
import { useSettings } from "./lib/settings";

type ScoreState = ReturnType<typeof useScore>;
type SettingsState = ReturnType<typeof useSettings>;

const ScoreContext = createContext<ScoreState | null>(null);
const SettingsContext = createContext<SettingsState | null>(null);

/** Provides a single shared scorecard + settings to the whole app. */
export function AppProviders({ children }: { children: ReactNode }) {
  const score = useScore();
  const settings = useSettings();
  return (
    <ScoreContext.Provider value={score}>
      <SettingsContext.Provider value={settings}>{children}</SettingsContext.Provider>
    </ScoreContext.Provider>
  );
}

export function useScoreState(): ScoreState {
  const ctx = useContext(ScoreContext);
  if (!ctx) throw new Error("useScoreState must be used within AppProviders");
  return ctx;
}

export function useSettingsState(): SettingsState {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettingsState must be used within AppProviders");
  return ctx;
}
