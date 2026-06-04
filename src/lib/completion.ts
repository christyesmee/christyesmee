import type { Category } from "../data/types";

// Per-user, per-level category completion — a separate local store. This does
// NOT touch the score database; it only remembers which categories a user has
// practised so we can show a completion ring (thirds).

const CATEGORIES: Category[] = ["vocab", "grammar", "verbs"];

type LevelCompletion = Partial<Record<Category, boolean>>;
type Store = Record<string, LevelCompletion>; // key: level number as string

function key(username: string): string {
  return `nl-completion-${username}`;
}

function load(username: string): Store {
  try {
    const raw = localStorage.getItem(key(username));
    if (raw) return JSON.parse(raw) as Store;
  } catch {
    // ignore
  }
  return {};
}

function save(username: string, store: Store): void {
  try {
    localStorage.setItem(key(username), JSON.stringify(store));
  } catch {
    // ignore
  }
}

/** Mark one category of a level as practised/completed. */
export function markCompleted(username: string, level: number, category: Category): void {
  const store = load(username);
  const lvl = store[String(level)] ?? {};
  lvl[category] = true;
  store[String(level)] = lvl;
  save(username, store);
}

export interface LevelProgress {
  vocab: boolean;
  grammar: boolean;
  verbs: boolean;
  /** Number of completed categories (0–3). */
  count: number;
  /** Fraction completed (0–1). */
  fraction: number;
}

export function getLevelProgress(username: string, level: number): LevelProgress {
  const lvl = load(username)[String(level)] ?? {};
  const vocab = !!lvl.vocab;
  const grammar = !!lvl.grammar;
  const verbs = !!lvl.verbs;
  const count = CATEGORIES.filter((c) => lvl[c]).length;
  return { vocab, grammar, verbs, count, fraction: count / CATEGORIES.length };
}
