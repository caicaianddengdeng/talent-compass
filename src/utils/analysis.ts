import type { Question, ResultType } from '../data/types';

function buildScoreMap(questions: Question[], answers: number[]): Record<string, number> {
  const scoreMap: Record<string, number> = {};
  answers.forEach((answer, index) => {
    const question = questions[index];
    const selectedOption = question.options[answer];
    if (selectedOption) {
      for (const [key, score] of Object.entries(selectedOption.scores)) {
        scoreMap[key] = (scoreMap[key] || 0) + (score as number);
      }
    }
  });
  return scoreMap;
}

export function calculateResult(questions: Question[], results: ResultType[], answers: number[]): ResultType {
  const scoreMap = buildScoreMap(questions, answers);

  let highestKey = '';
  let highestScore = -1;
  for (const [key, score] of Object.entries(scoreMap)) {
    if (score > highestScore) {
      highestScore = score;
      highestKey = key;
    }
  }

  return results.find((r: ResultType) => r.id === highestKey)!;
}

export function getAllScores(questions: Question[], answers: number[]): Record<string, number> {
  return buildScoreMap(questions, answers);
}
