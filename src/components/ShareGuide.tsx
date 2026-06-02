import { useState, useEffect } from 'react';

// 检测微信/QQ 等国内浏览器，显示分享引导浮层
export default function ShareGuide() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isWechat = ua.includes('micromessenger');
    const isQQ = ua.includes('qq/') && !ua.includes('mqqbrowser');
    const isWeibo = ua.includes('weibo');
    if (isWechat || isQQ || isWeibo) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="share-guide-overlay" onClick={() => setShow(false)}>
      <div className="share-guide-arrow" />
      <div className="share-guide-text">
        <p className="share-guide-title">👆 点击右上角</p>
        <p className="share-guide-sub">分享给朋友或分享到朋友圈</p>
        <p className="share-guide-close">点击任意位置关闭</p>
      </div>
    </div>
  );
}
