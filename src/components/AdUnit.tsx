import { useEffect, useRef } from 'react';
import { trackAdClick } from '../utils/track';
import { AD_CONFIG, SELF_PROMO_LINKS, AFFILIATE_LINKS } from '../utils/adConfig';

type AdMode = 'adsense' | 'affiliate' | 'self-promo';

interface AdUnitProps {
  mode?: AdMode;
}

export default function AdUnit({ mode = 'self-promo' }: AdUnitProps) {
  const handleAdClick = (type: string, url?: string) => {
    trackAdClick(type);
    if (url) window.open(url, '_blank', 'noopener');
  };

  // Google AdSense
  if (mode === 'adsense') {
    if (!AD_CONFIG.adsense.enabled) {
      return (
        <div className="ad-self-promo">
          <div className="ad-self-header">📢 广告位招租</div>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '0.82rem', padding: '1rem' }}>
            替换 <code style={{ color: '#a855f7' }}>src/utils/adConfig.ts</code> 中的 AdSense ID 即可激活
          </p>
        </div>
      );
    }
    return <GoogleAdSense />;
  }

  // 联盟推广
  if (mode === 'affiliate') {
    const link = AFFILIATE_LINKS[Math.floor(Math.random() * AFFILIATE_LINKS.length)];
    return (
      <div className="ad-affiliate" onClick={() => handleAdClick('affiliate', link.url)}>
        <span className="ad-affiliate-emoji">{link.emoji}</span>
        <div className="ad-affiliate-text">
          <div className="ad-affiliate-title">{link.title}</div>
          <div className="ad-affiliate-desc">{link.desc}</div>
        </div>
        <span className="ad-affiliate-arrow">→</span>
      </div>
    );
  }

  // 自营推广（默认）
  return (
    <div className="ad-self-promo">
      <div className="ad-self-header">📌 推荐资源</div>
      <div className="ad-self-links">
        {SELF_PROMO_LINKS.map((link, i) => (
          <div key={i} className="ad-self-item" onClick={() => handleAdClick('self_promo', link.url)}>
            <span className="ad-self-emoji">{link.emoji}</span>
            <div>
              <div className="ad-self-title">{link.title}</div>
              <div className="ad-self-desc">{link.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Google AdSense 组件（激活后自动加载广告）
function GoogleAdSense() {
  const inited = useRef(false);

  useEffect(() => {
    if (inited.current) return;
    inited.current = true;
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {}
  }, []);

  return (
    <div className="ad-container">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client={AD_CONFIG.adsense.client}
        data-ad-slot={AD_CONFIG.adsense.slot}
      />
    </div>
  );
}
