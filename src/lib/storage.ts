// Typed localStorage helpers. Every key is prefixed `msnreborn:` per the
// tech steering. Failures (private mode, quota, disabled) degrade silently to
// the fallback so the app stays fully playable with zero configuration.

const PREFIX = 'msnreborn:';

/** Centralised storage keys so typos can't fragment persistence. */
export const STORAGE_KEYS = {
  myStatus: 'myStatus',
  myPersonalMessage: 'myPersonalMessage',
  muted: 'muted',
} as const;

export function getItem<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function setItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // Ignore — persistence is a nicety, never a gate.
  }
}

export function removeItem(key: string): void {
  try {
    localStorage.removeItem(PREFIX + key);
  } catch {
    // Ignore.
  }
}
