import type { QuizMeta } from '../data/registry';

interface HomePageProps {
  quizzes: QuizMeta[];
  onSelect: (id: string) => void;
}

export default function HomePage({ quizzes, onSelect }: HomePageProps) {
  const totalParticipants = quizzes.reduce((sum, q) => sum + q.participants, 0);

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
