// 统一埋点工具 — 同时向 GA4 和百度统计发送事件
// 如果脚本未加载则静默失败

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    _hmt?: unknown[][];
  }
}

type EventParams = Record<string, string | number>;

function trackGA4(event: string, params?: EventParams): void {
  try {
    if (window.gtag) {
      window.gtag('event', event, params);
    }
  } catch {}
}

function trackBaidu(event: string, params?: EventParams): void {
  try {
    if (window._hmt) {
      const label = params ? Object.entries(params).map(([k, v]) => `${k}:${v}`).join(',') : '';
      window._hmt.push(['_trackEvent', 'talent_compass', event, label]);
    }
  } catch {}
}

export function track(event: string, params?: EventParams): void {
  trackGA4(event, params);
  trackBaidu(event, params);
}

// 预定义事件
export function trackPageView(screen: string): void {
  track('page_view', { screen });
}

export function trackQuizStart(quizId: string): void {
  track('quiz_start', { quiz_id: quizId });
}

export function trackQuizComplete(quizId: string, resultType: string): void {
  track('quiz_complete', { quiz_id: quizId, result_type: resultType });
}

export function trackPaywallClick(quizId: string): void {
  track('paywall_click', { quiz_id: quizId });
}

export function trackPaywallUnlock(method: string): void {
  track('paywall_unlock', { method });
}

export function trackShare(platform: string): void {
  track('share_click', { platform });
}

export function trackAdClick(adType: string): void {
  track('ad_click', { ad_type: adType });
}
