// Simple client-side login for a private, friends-only app.
// NOTE: these credentials live in the shipped JS bundle and are NOT secure —
// they only gate casual access for the three intended users.

const CREDENTIALS: Record<string, string> = {
  esmee: "esmee123",
  francesca: "francesca123",
  bass: "bass123",
};

const DISPLAY_NAMES: Record<string, string> = {
  esmee: "Esmee",
  francesca: "Francesca",
  bass: "Bass",
};

/** Usernames allowed on the platform. */
export const ALLOWED_USERS = Object.keys(CREDENTIALS);

const SESSION_KEY = "nl-current-user";

export function normalizeUsername(username: string): string {
  return username.trim().toLowerCase();
}

/** Returns true if the username/password pair is valid. */
export function verifyCredentials(username: string, password: string): boolean {
  const u = normalizeUsername(username);
  return CREDENTIALS[u] !== undefined && CREDENTIALS[u] === password;
}

export function displayName(username: string): string {
  return DISPLAY_NAMES[username] ?? username;
}

export function loadCurrentUser(): string | null {
  try {
    const u = localStorage.getItem(SESSION_KEY);
    return u && CREDENTIALS[u] ? u : null;
  } catch {
    return null;
  }
}

export function storeCurrentUser(username: string | null): void {
  try {
    if (username) localStorage.setItem(SESSION_KEY, username);
    else localStorage.removeItem(SESSION_KEY);
  } catch {
    // ignore
  }
}
