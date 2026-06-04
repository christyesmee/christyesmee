import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "nl-leren-settings-v1";

export interface Settings {
  /** When true, capitalization and punctuation must match exactly. */
  strictMatching: boolean;
}

const DEFAULTS: Settings = {
  strictMatching: false,
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

  return { settings, setStrictMatching };
}
