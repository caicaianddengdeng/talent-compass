const UNLOCK_KEY = 'talent_compass_unlocked';

export function isUnlocked(): boolean {
  try {
    return localStorage.getItem(UNLOCK_KEY) === 'true';
  } catch {
    return false;
  }
}

export function setUnlocked(): void {
  try {
    localStorage.setItem(UNLOCK_KEY, 'true');
  } catch {}
}
