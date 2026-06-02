import { useState } from 'react';
import { setUnlocked } from '../data/codes';
import { trackPaywallUnlock } from '../utils/track';

interface PaywallModalProps {
  onClose: () => void;
  onUnlock: () => void;
}

const PAYMENT_INFO = {
  wxQrImage: '/talent-compass/wxpay-qr.jpg',
  alipayQrImage: '/talent-compass/alipay-qr.jpg',
  price: '9.9',
};

export default function PaywallModal({ onClose, onUnlock }: PaywallModalProps) {
  const [mode, setMode] = useState<'choose' | 'wxpay' | 'alipay'>('choose');
  const [qrError, setQrError] = useState<Record<string, boolean>>({});

  const handleUnlock = (method: string) => {
    setUnlocked();
    trackPaywallUnlock(method);
    onUnlock();
  };

  return (
    <div className="paywall-overlay" onClick={onClose}>
      <div className="paywall-modal" onClick={(e) => e.stopPropagation()}>
        <button className="paywall-close" onClick={onClose}>✕</button>

        {mode === 'choose' && (
          <div className="paywall-choose">
            <h2 className="paywall-title">🔓 解锁深度分析报告</h2>
            <p className="paywall-price">¥{PAYMENT_INFO.price}</p>
            <p className="paywall-desc">包含 AI 深度分析、学习建议、职业发展路径</p>

            <div className="paywall-options">
              <button className="paywall-option-btn primary" onClick={() => setMode('wxpay')}>
                <span className="paywall-option-icon">💚</span>
                <div>
                  <div className="paywall-option-title">微信支付</div>
                  <div className="paywall-option-sub">微信扫码支付 ¥{PAYMENT_INFO.price}</div>
                </div>
              </button>

              <button className="paywall-option-btn" onClick={() => setMode('alipay')}>
                <span className="paywall-option-icon">💙</span>
                <div>
                  <div className="paywall-option-title">支付宝</div>
                  <div className="paywall-option-sub">支付宝扫码支付 ¥{PAYMENT_INFO.price}</div>
                </div>
              </button>
            </div>
          </div>
        )}

        {mode === 'wxpay' && (
          <div className="paywall-qrcode">
            <button className="paywall-back" onClick={() => setMode('choose')}>← 返回</button>
            <h3 className="paywall-title">💚 微信支付 ¥{PAYMENT_INFO.price}</h3>

            <div className="qrcode-container">
              {!qrError.wx ? (
                <img
                  className="qrcode-img"
                  src={PAYMENT_INFO.wxQrImage}
                  alt="微信赞赏码"
                  onError={() => setQrError((p) => ({ ...p, wx: true }))}
                />
              ) : (
                <div className="qrcode-fallback">
                  <span className="qrcode-fallback-icon">💚</span>
                  <p>微信赞赏码加载失败</p>
                </div>
              )}
            </div>

            <div className="payment-steps">
              <div className="payment-step">
                <span className="payment-step-num">1</span>
                <span>截图保存上方赞赏码</span>
              </div>
              <div className="payment-step">
                <span className="payment-step-num">2</span>
                <span>打开微信扫一扫 → 相册选择赞赏码</span>
              </div>
              <div className="payment-step">
                <span className="payment-step-num">3</span>
                <span>支付 ¥{PAYMENT_INFO.price}，备注"天赋罗盘"</span>
              </div>
            </div>

            <button className="paywall-unlock-btn" onClick={() => handleUnlock('wxpay')}>
              ✅ 我已完成支付，立即解锁
            </button>
          </div>
        )}

        {mode === 'alipay' && (
          <div className="paywall-qrcode">
            <button className="paywall-back" onClick={() => setMode('choose')}>← 返回</button>
            <h3 className="paywall-title">💙 支付宝 ¥{PAYMENT_INFO.price}</h3>

            <div className="qrcode-container">
              {!qrError.alipay ? (
                <img
                  className="qrcode-img"
                  src={PAYMENT_INFO.alipayQrImage}
                  alt="支付宝收款码"
                  onError={() => setQrError((p) => ({ ...p, alipay: true }))}
                />
              ) : (
                <div className="qrcode-fallback">
                  <span className="qrcode-fallback-icon">💙</span>
                  <p>支付宝收款码加载失败</p>
                </div>
              )}
            </div>

            <div className="payment-steps">
              <div className="payment-step">
                <span className="payment-step-num">1</span>
                <span>截图保存上方收款码</span>
              </div>
              <div className="payment-step">
                <span className="payment-step-num">2</span>
                <span>打开支付宝扫一扫 → 相册选择收款码</span>
              </div>
              <div className="payment-step">
                <span className="payment-step-num">3</span>
                <span>支付 ¥{PAYMENT_INFO.price}，备注"天赋罗盘"</span>
              </div>
            </div>

            <button className="paywall-unlock-btn" onClick={() => handleUnlock('alipay')}>
              ✅ 我已完成支付，立即解锁
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
