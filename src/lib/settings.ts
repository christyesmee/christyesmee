import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "nl-leren-settings-v1";

/** Direction of practice questions. */
export type Direction = "nl-en" | "en-nl";

export interface Settings {
  /** When true, capitalization and punctuation must match exactly. */
  strictMatching: boolean;
  /** "nl-en": see Dutch, answer English. "en-nl": see English, answer Dutch. */
  direction: Direction;
}

const DEFAULTS: Settings = {
  strictMatching: false,
  direction: "nl-en",
};

function load(): Settings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...DEFAULTS, ...(JSON.parse(raw) as Partial<Settings>) };
  } catch {
    // ignore corrupt storage
  }
  return DEFAULTS;
}

export function useSettings() {
  const [settings, setSettings] = useState<Settings>(load);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  const setStrictMatching = useCallback((strictMatching: boolean) => {
    setSettings((prev) => ({ ...prev, strictMatching }));
  }, []);

  const setDirection = useCallback((direction: Direction) => {
    setSettings((prev) => ({ ...prev, direction }));
  }, []);

  return { settings, setStrictMatching, setDirection };
}
