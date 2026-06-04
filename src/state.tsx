import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { useScore } from "./lib/score";
import { useSettings } from "./lib/settings";
import {
  loadCurrentUser,
  storeCurrentUser,
  verifyCredentials,
  normalizeUsername,
} from "./lib/auth";
import { cloudEnabled, fetchUserTotal } from "./lib/cloud";

// --- Auth -----------------------------------------------------------------

interface AuthState {
  user: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthState | null>(null);

// --- Settings -------------------------------------------------------------

type SettingsState = ReturnType<typeof useSettings>;
const SettingsContext = createContext<SettingsState | null>(null);

// --- Score (per user) -----------------------------------------------------

type ScoreState = ReturnType<typeof useScore>;
const ScoreContext = createContext<ScoreState | null>(null);

/** Top-level providers: auth + global settings. */
export function AppProviders({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(() => loadCurrentUser());
  const settings = useSettings();

  const login = useCallback((username: string, password: string): boolean => {
    if (!verifyCredentials(username, password)) return false;
    const u = normalizeUsername(username);
    storeCurrentUser(u);
    setUser(u);
    return true;
  }, []);

  const logout = useCallback(() => {
    storeCurrentUser(null);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <SettingsContext.Provider value={settings}>{children}</SettingsContext.Provider>
    </AuthContext.Provider>
  );
}

/** Provides the per-user scorecard. Mount with key={username} so it resets
 *  cleanly between users. Seeds the total from the cloud on login. */
export function UserScope({ username, children }: { username: string; children: ReactNode }) {
  const score = useScore(username);
  const { setTotal } = score;

  useEffect(() => {
    if (!cloudEnabled) return;
    let active = true;
    fetchUserTotal(username).then((total) => {
      if (active && total !== null) setTotal(total);
    });
    return () => {
      active = false;
    };
  }, [username, setTotal]);

  return <ScoreContext.Provider value={score}>{children}</ScoreContext.Provider>;
}

// --- Hooks ----------------------------------------------------------------

export function useAuthState(): AuthState {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthState must be used within AppProviders");
  return ctx;
}

export function useSettingsState(): SettingsState {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettingsState must be used within AppProviders");
  return ctx;
}

export function useScoreState(): ScoreState {
  const ctx = useContext(ScoreContext);
  if (!ctx) throw new Error("useScoreState must be used within UserScope");
  return ctx;
}
