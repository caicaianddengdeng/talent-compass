import type { Question, ResultType } from '../data/types';

export function calculateResult(questions: Question[], results: ResultType[], answers: number[]): ResultType {
  const scoreMap: Record<string, number> = {};

  answers.forEach((answer, index) => {
    const question = questions[index];
    const selectedOption = question.options[answer];
    if (selectedOption) {
      Object.entries(selectedOption.scores as Record<string, number>).forEach(([key, score]) => {
        scoreMap[key] = (scoreMap[key] || 0) + score;
      });
    }
  });

  let highestKey = '';
  let highestScore = -1;

  Object.entries(scoreMap).forEach(([key, score]) => {
    if (score > highestScore) {
      highestScore = score;
      highestKey = key;
    }
  });

  return results.find((r: ResultType) => r.id === highestKey)!;
}

export function getAllScores(questions: Question[], answers: number[]): Record<string, number> {
  const scoreMap: Record<string, number> = {};
  answers.forEach((answer, index) => {
    const question = questions[index];
    const selectedOption = question.options[answer];
    if (selectedOption) {
      Object.entries(selectedOption.scores as Record<string, number>).forEach(([key, score]) => {
        scoreMap[key] = (scoreMap[key] || 0) + score;
      });
    }
  });
  return scoreMap;
}
