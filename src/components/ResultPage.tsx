import { useState } from 'react';
import type { ResultType } from '../data/types';

interface ResultPageProps {
  quizId: string;
  result: ResultType;
  allScores: Record<string, number>;
  results: ResultType[];
  onRestart: () => void;
}

export default function ResultPage({ quizId, result, allScores, results, onRestart }: ResultPageProps) {
  const [showPaywall, setShowPaywall] = useState(false);

  const sortedScores = Object.entries(allScores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 4);
  const topScore = sortedScores[0]?.[1] || 1;

  const shareText = `我在天赋罗盘测出「${result.name}」——${result.subtitle}！来看看你是什么类型？`;

  const handleShare = async () => {
    const url = `${window.location.origin}${window.location.pathname}?q=${quizId}`;
    if (navigator.share) {
      try { await navigator.share({ title: '天赋罗盘', text: shareText, url }); } catch {}
    } else {
      await navigator.clipboard.writeText(`${shareText} ${url}`);
      alert('已复制分享文案到剪贴板！');
    }
  };

  return (
    <div className="result-page">
      <div className="result-header">
        <h2 className="result-title-small">你的测评结果</h2>
      </div>

      {/* Result card */}
      <div className="result-card" style={{ background: result.gradient }}>
        <div className="result-card-inner">
          <div className="result-emoji">{result.emoji}</div>
          <h1 className="result-name">{result.name}</h1>
          <p className="result-subtitle">{result.subtitle}</p>
          <div className="result-divider" />
          <p className="result-desc">{result.description}</p>

          {/* Score bars */}
          {sortedScores.length > 1 && (
            <div className="score-section">
              <p className="score-title">能力维度</p>
              {sortedScores.map(([key, score]) => {
                const type = results.find((r) => r.id === key);
                if (!type) return null;
                return (
                  <div key={key} className="score-bar-row">
                    <span className="score-bar-label">{type.emoji} {type.name}</span>
                    <div className="score-bar-track">
                      <div className="score-bar-fill" style={{ width: `${(score / topScore) * 100}%`, background: type.color }} />
                    </div>
                    <span className="score-bar-value">{score}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Strengths */}
      {!showPaywall && result.strengths.length > 0 && (
        <div className="section">
          <h3 className="section-title">✨ 你的核心优势</h3>
          <div className="strengths-grid">
            {result.strengths.map((s) => <span key={s} className="strength-tag">{s}</span>)}
          </div>
        </div>
      )}

      {/* Careers */}
      {!showPaywall && result.careers.length > 0 && (
        <div className="section">
          <h3 className="section-title">🎯 适合的职业方向</h3>
          <div className="careers-list">
            {result.careers.map((c) => <span key={c} className="career-tag">{c}</span>)}
          </div>
        </div>
      )}

      {/* Paywall or Deep Analysis */}
      {!showPaywall ? (
        <button className="btn-deep" onClick={() => setShowPaywall(true)}>
          🔓 解锁深度分析报告 — ¥9.9
        </button>
      ) : (
        <div className="section deep-analysis">
          <div className="paid-badge">深度报告</div>
          <h3 className="section-title">🧠 AI深度分析</h3>
          <p className="deep-text">{result.deepAnalysis || '该类型暂无深度分析内容，敬请期待。'}</p>
        </div>
      )}

      {/* Action buttons */}
      <div className="action-buttons">
        <button className="btn-share" onClick={handleShare}>📤 分享给朋友</button>
        <button className="btn-retry" onClick={onRestart}>🔄 测其他</button>
      </div>

      {/* Ad */}
      <div className="ad-placeholder">
        <span>广告位 — 接入百度联盟/AdSense变现</span>
      </div>

      <footer className="result-footer">
        <p>© 2026 天赋罗盘 | 测评结果仅供娱乐参考</p>
      </footer>
    </div>
  );
}
