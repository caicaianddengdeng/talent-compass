import { useState, useCallback, useEffect, useRef } from 'react';
import type { QuizBundle } from '../data/registry';
import { trackQuizStart } from '../utils/track';
import AdUnit from './AdUnit';

interface QuizPageProps {
  quiz: QuizBundle;
  onComplete: (answers: number[]) => void;
}

export default function QuizPage({ quiz, onComplete }: QuizPageProps) {
  const questions = quiz.questions;
  const TOTAL = questions.length;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(TOTAL).fill(-1));
  const [animDir, setAnimDir] = useState<'forward' | 'back'>('forward');

  const q = questions[current];
  const selected = answers[current];
  const progress = ((current + (selected >= 0 ? 1 : 0)) / TOTAL) * 100;
  const tracked = useRef(false);

  useEffect(() => {
    if (!tracked.current) {
      trackQuizStart(quiz.meta.id);
      tracked.current = true;
    }
  }, [quiz.meta.id]);

  const selectOption = useCallback(
    (index: number) => {
      if (selected >= 0) return;
      const next = [...answers];
      next[current] = index;
      setAnswers(next);

      if (current < TOTAL - 1) {
        setTimeout(() => {
          setAnimDir('forward');
          setCurrent(current + 1);
        }, 300);
      } else {
        setTimeout(() => onComplete(next), 400);
      }
    },
    [current, answers, selected, onComplete, TOTAL],
  );

  const goBack = useCallback(() => {
    if (current > 0) {
      setAnimDir('back');
      setCurrent(current - 1);
    }
  }, [current]);

  return (
    <div className="quiz">
      <div className="quiz-header">
        <button className="btn-back" onClick={goBack} disabled={current === 0}>
          ← 上一题
        </button>
        <div className="progress-bar-wrapper">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="progress-text">{current + 1}/{TOTAL}</span>
        </div>
      </div>

      <div className="quiz-card" key={current}>
        <div className="question-number">
          {quiz.meta.emoji} {quiz.meta.title} · Q{current + 1}
        </div>
        <h2 className="question-text">{q.text}</h2>

        <div className="options-list">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className={`option-btn ${selected === i ? 'selected' : ''} ${selected >= 0 && selected !== i ? 'dimmed' : ''}`}
              onClick={() => selectOption(i)}
              disabled={selected >= 0}
            >
              <span className="option-label">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="quiz-indicator">
        {answers.map((a, i) => (
          <div key={i} className={`dot ${a >= 0 ? 'done' : ''} ${i === current ? 'current' : ''}`} />
        ))}
      </div>

      <AdUnit mode="affiliate" />
    </div>
  );
}
