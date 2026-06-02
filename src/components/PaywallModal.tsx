import { useState } from 'react';
import { verifyCode, setUnlocked } from '../data/codes';
import { trackPaywallUnlock } from '../utils/track';

interface PaywallModalProps {
  onClose: () => void;
  onUnlock: () => void;
}

// 微信/支付宝收款信息 — 替换为你的真实信息
const PAYMENT_INFO = {
  // 把 public/wxpay-qr.png 替换为你的微信赞赏码截图
  wxQrImage: '/talent-compass/wxpay-qr.jpg',
  // 把 public/alipay-qr.jpg 替换为你的支付宝收款码截图
  alipayQrImage: '/talent-compass/alipay-qr.jpg',
  // 你的微信ID或公众号，用户付款后联系你获取激活码
  wxContact: 'cC_X1190',
  // 价格
  price: '9.9',
};

export default function PaywallModal({ onClose, onUnlock }: PaywallModalProps) {
  const [mode, setMode] = useState<'choose' | 'wxpay' | 'alipay' | 'code'>('choose');
  const [codeInput, setCodeInput] = useState('');
  const [codeError, setCodeError] = useState('');
  const [qrError, setQrError] = useState<Record<string, boolean>>({});

  const handleCodeSubmit = () => {
    if (verifyCode(codeInput)) {
      setUnlocked();
      trackPaywallUnlock('activation_code');
      onUnlock();
    } else {
      setCodeError('激活码无效，请检查后重试');
    }
  };

  const handleCopyWx = () => {
    navigator.clipboard.writeText(PAYMENT_INFO.wxContact).then(() => {
      alert('微信号已复制，请在微信中搜索添加');
    }).catch(() => {});
  };

  return (
    <div className="paywall-overlay" onClick={onClose}>
      <div className="paywall-modal" onClick={(e) => e.stopPropagation()}>
        <button className="paywall-close" onClick={onClose}>✕</button>

        {/* ====== 主选单 ====== */}
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
                  <div className="paywall-option-sub">微信赞赏码支付 ¥{PAYMENT_INFO.price}</div>
                </div>
              </button>

              <button className="paywall-option-btn" onClick={() => setMode('alipay')}>
                <span className="paywall-option-icon">💙</span>
                <div>
                  <div className="paywall-option-title">支付宝</div>
                  <div className="paywall-option-sub">支付宝扫码支付 ¥{PAYMENT_INFO.price}</div>
                </div>
              </button>

              <button className="paywall-option-btn" onClick={() => setMode('code')}>
                <span className="paywall-option-icon">🔑</span>
                <div>
                  <div className="paywall-option-title">已有激活码</div>
                  <div className="paywall-option-sub">输入激活码立即解锁</div>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* ====== 微信支付 ====== */}
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
                  <p>微信赞赏码</p>
                  <p className="qrcode-fallback-hint">请将赞赏码截图保存为<br/>public/wxpay-qr.png</p>
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
              <div className="payment-step">
                <span className="payment-step-num">4</span>
                <div>
                  <span>添加微信 </span>
                  <button className="payment-copy-btn" onClick={handleCopyWx}>
                    {PAYMENT_INFO.wxContact} 📋
                  </button>
                  <span> 获取激活码</span>
                </div>
              </div>
            </div>

            <button className="paywall-option-btn" onClick={() => setMode('code')} style={{ marginTop: '1rem' }}>
              🔑 已拿到激活码？点此输入
            </button>
          </div>
        )}

        {/* ====== 支付宝 ====== */}
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
                  <p>支付宝收款码</p>
                  <p className="qrcode-fallback-hint">请将收款码截图保存为<br/>public/alipay-qr.png</p>
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
              <div className="payment-step">
                <span className="payment-step-num">4</span>
                <div>
                  <span>添加微信 </span>
                  <button className="payment-copy-btn" onClick={handleCopyWx}>
                    {PAYMENT_INFO.wxContact} 📋
                  </button>
                  <span> 获取激活码</span>
                </div>
              </div>
            </div>

            <button className="paywall-option-btn" onClick={() => setMode('code')} style={{ marginTop: '1rem' }}>
              🔑 已拿到激活码？点此输入
            </button>
          </div>
        )}

        {/* ====== 激活码输入 ====== */}
        {mode === 'code' && (
          <div className="paywall-code">
            <button className="paywall-back" onClick={() => setMode('choose')}>← 返回</button>
            <h3 className="paywall-title">输入激活码</h3>
            <p className="paywall-desc" style={{ marginBottom: '1rem' }}>
              付款后添加微信获取激活码，一码一用
            </p>
            <input
              className="code-input"
              type="text"
              placeholder="TALENT-XXXX-XXXX"
              value={codeInput}
              onChange={(e) => { setCodeInput(e.target.value); setCodeError(''); }}
              autoFocus
            />
            {codeError && <p className="code-error">{codeError}</p>}
            <button className="paywall-option-btn primary" onClick={handleCodeSubmit}>
              确认解锁
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
