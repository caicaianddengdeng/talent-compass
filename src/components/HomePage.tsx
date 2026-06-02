import { useEffect, useState } from 'react';
import type { QuizMeta } from '../data/registry';
import { trackPageView } from '../utils/track';
import { getHistory, type ResultRecord } from '../utils/history';
import AdUnit from './AdUnit';

interface HomePageProps {
  quizzes: QuizMeta[];
  onSelect: (id: string) => void;
}

export default function HomePage({ quizzes, onSelect }: HomePageProps) {
  const totalParticipants = quizzes.reduce((sum, q) => sum + q.participants, 0);
  const [history, setHistory] = useState<ResultRecord[]>([]);

  useEffect(() => {
    trackPageView('home');
    setHistory(getHistory().slice(0, 3));
  }, []);

  return (
    <div className="home">
      <div className="home-bg" />

      <header className="home-header">
        <h1 className="home-title">
          发现你的<span className="text-gradient">隐藏天赋</span>
        </h1>
        <p className="home-subtitle">AI驱动的趣味心理测评，3分钟认识全新的自己</p>
        <div className="home-total">
          <span className="total-number">{formatNum(totalParticipants)}+</span>
          <span className="total-label">人已参与</span>
        </div>
      </header>

      {/* Recent history */}
      {history.length > 0 && (
        <div className="history-section">
          <h3 className="history-title">📋 最近测评</h3>
          <div className="history-list">
            {history.map((r, i) => (
              <button
                key={i}
                className="history-item"
                onClick={() => onSelect(r.quizId)}
              >
                <span className="history-emoji">{r.result.emoji}</span>
                <div className="history-info">
                  <span className="history-result">{r.result.name}</span>
                  <span className="history-quiz">{r.quizTitle}</span>
                </div>
                <span className="history-time">{timeAgo(r.timestamp)}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <AdUnit mode="affiliate" />

      <div className="quiz-grid">
        {quizzes.map((q) => (
          <button key={q.id} className="quiz-card-btn" onClick={() => onSelect(q.id)}>
            <div className="quiz-card-bg" style={{ background: q.gradient }} />
            <div className="quiz-card-content">
              <div className="quiz-card-top">
                <span className="quiz-card-emoji">{q.emoji}</span>
                <div className="quiz-card-tags">
                  {q.tags.map((t) => (
                    <span key={t} className="quiz-tag">{t}</span>
                  ))}
                </div>
              </div>
              <h3 className="quiz-card-title">{q.title}</h3>
              <p className="quiz-card-desc">{q.description}</p>
              <div className="quiz-card-meta">
                <span>{q.questionCount}题</span>
                <span className="meta-dot">·</span>
                <span>{q.duration}</span>
                <span className="meta-dot">·</span>
                <span>{formatNum(q.participants)}人测过</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <AdUnit mode="self-promo" />

      <footer className="home-footer">
        <p>免费 · 无需注册 · AI即时分析</p>
      </footer>
    </div>
  );
}

function formatNum(n: number): string {
  if (n >= 10000) return (n / 10000).toFixed(0) + '万';
  return n.toLocaleString();
}

function timeAgo(ts: number): string {
  const diff = Date.now() - ts;
  if (diff < 60000) return '刚刚';
  if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}小时前`;
  return `${Math.floor(diff / 86400000)}天前`;
}
