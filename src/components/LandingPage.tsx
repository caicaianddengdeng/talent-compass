import { quizRegistry } from '../data/registry';
import AdUnit from './AdUnit';

interface LandingPageProps {
  onEnter: () => void;
}

export default function LandingPage({ onEnter }: LandingPageProps) {
  const totalParticipants = Object.values(quizRegistry).reduce((sum, q) => sum + q.participants, 0);

  return (
    <div className="landing">
      <div className="landing-bg" />

      <div className="landing-content">
        <div className="landing-badge">
          <span className="pulse-dot" />
          AI驱动 · 职业天赋测评
        </div>

        <h1 className="landing-title">
          天赋<span className="text-gradient">罗盘</span>
        </h1>
        <p className="landing-subtitle">
          基于心理学模型与AI算法<br />
          12道题，3分钟，发现隐藏的你自己
        </p>

        <div className="landing-stats">
          <div className="stat-item">
            <span className="stat-number">{Object.keys(quizRegistry).length}</span>
            <span className="stat-label">测评类型</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">{formatShortNum(totalParticipants)}+</span>
            <span className="stat-label">人已参与</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">3分钟</span>
            <span className="stat-label">快速出结果</span>
          </div>
        </div>

        <button className="btn-start" onClick={onEnter}>
          开始探索 →
        </button>
        <p className="landing-note">免费 · 无需注册 · AI即时分析</p>

        <div className="landing-features">
          <div className="feature"><span className="feature-icon">🧭</span> 天赋罗盘</div>
          <div className="feature"><span className="feature-icon">💕</span> 恋爱匹配</div>
          <div className="feature"><span className="feature-icon">🔍</span> MBTI测试</div>
        </div>
      </div>

      <AdUnit mode="affiliate" />

      <footer className="landing-footer">
        <p>© 2026 天赋罗盘 | 测评结果仅供娱乐参考</p>
      </footer>
    </div>
  );
}

function formatShortNum(n: number): string {
  if (n >= 10000) return (n / 10000).toFixed(0) + '万';
  return n.toLocaleString();
}
