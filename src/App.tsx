import { useState, useCallback } from 'react';
import { quizRegistry, getQuiz } from './data/registry';
import { calculateResult, getAllScores } from './utils/analysis';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import type { ResultType } from './data/types';

type Screen = 'home' | 'quiz' | 'result';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [quizId, setQuizId] = useState<string>('');
  const [result, setResult] = useState<ResultType | null>(null);
  const [allScores, setAllScores] = useState<Record<string, number>>({});
  const [restartCount, setRestartCount] = useState(0);

  const handleSelectQuiz = useCallback((id: string) => {
    setQuizId(id);
    setResult(null);
    setAllScores({});
    setScreen('quiz');
  }, []);

  const handleComplete = useCallback(
    (answers: number[]) => {
      const quiz = getQuiz(quizId);
      const res = calculateResult(quiz.questions, quiz.results, answers);
      const scores = getAllScores(quiz.questions, answers);
      setResult(res);
      setAllScores(scores);
      setScreen('result');
    },
    [quizId],
  );

  const handleRestart = useCallback(() => {
    setResult(null);
    setAllScores({});
    setQuizId('');
    setRestartCount((c) => c + 1);
    setScreen('home');
  }, []);

  return (
    <div className="app">
      {screen === 'home' && <HomePage quizzes={Object.values(quizRegistry)} onSelect={handleSelectQuiz} />}
      {screen === 'quiz' && (
        <QuizPage
          key={restartCount}
          quiz={getQuiz(quizId)}
          onComplete={handleComplete}
        />
      )}
      {screen === 'result' && result && (
        <ResultPage
          quizId={quizId}
          result={result}
          allScores={allScores}
          results={getQuiz(quizId).results}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
