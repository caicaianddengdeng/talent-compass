import type { ResultType } from '../data/types';

export interface ResultRecord {
  quizId: string;
  quizTitle: string;
  result: ResultType;
  timestamp: number;
}

const STORAGE_KEY = 'talent_compass_history';
const MAX_RECORDS = 20;

export function getHistory(): ResultRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as ResultRecord[];
  } catch {
    return [];
  }
}

export function saveResult(record: ResultRecord): void {
  try {
    const history = getHistory();
    history.unshift(record);
    if (history.length > MAX_RECORDS) history.length = MAX_RECORDS;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {}
}

export function clearHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
}
