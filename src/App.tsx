import { useState, useCallback, useEffect } from 'react';
import { quizRegistry, getQuiz } from './data/registry';
import { calculateResult, getAllScores } from './utils/analysis';
import { trackPageView, trackQuizComplete } from './utils/track';
import { saveResult } from './utils/history';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import type { ResultType } from './data/types';

type Screen = 'landing' | 'home' | 'quiz' | 'result';

export default function App() {
  const [screen, setScreen] = useState<Screen>('landing');
  const [quizId, setQuizId] = useState<string>('');
  const [result, setResult] = useState<ResultType | null>(null);
  const [allScores, setAllScores] = useState<Record<string, number>>({});
  const [restartCount, setRestartCount] = useState(0);

  // 深度链接: ?q=quizId 直接跳转测评
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if (q && quizRegistry[q]) {
      setQuizId(q);
      setScreen('quiz');
      trackPageView('quiz');
    }
  }, []);

  const handleSelectQuiz = useCallback((id: string) => {
    setQuizId(id);
    setResult(null);
    setAllScores({});
    setScreen('quiz');
    trackPageView('quiz');
  }, []);

  const handleComplete = useCallback(
    (answers: number[]) => {
      const quiz = getQuiz(quizId);
      const res = calculateResult(quiz.questions, quiz.results, answers);
      const scores = getAllScores(quiz.questions, answers);
      setResult(res);
      setAllScores(scores);
      setScreen('result');
      saveResult({ quizId, quizTitle: quiz.meta.title, result: res, timestamp: Date.now() });
      trackQuizComplete(quizId, res.id);
      trackPageView('result');
    },
    [quizId],
  );

  const handleRestart = useCallback(() => {
    setResult(null);
    setAllScores({});
    setQuizId('');
    setRestartCount((c) => c + 1);
    setScreen('home');
    trackPageView('home');
  }, []);

  return (
    <div className="app">
      {screen === 'landing' && <LandingPage onEnter={() => setScreen('home')} />}
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
