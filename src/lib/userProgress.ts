// Per-user "where did I leave off" memory (which A1 level was last opened).

function key(username: string): string {
  return `nl-progress-${username}`;
}

export function getLastLevel(username: string): number | null {
  try {
    const raw = localStorage.getItem(key(username));
    return raw ? Number(raw) : null;
  } catch {
    return null;
  }
}

export function setLastLevel(username: string, level: number): void {
  try {
    localStorage.setItem(key(username), String(level));
  } catch {
    // ignore
  }
}
