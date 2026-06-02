import type { ResultType } from '../data/types';

// 用 Canvas 生成测评结果海报
export async function generateShareImage(
  result: ResultType,
  allScores: Record<string, number>,
  results: ResultType[],
): Promise<string> {
  const canvas = document.createElement('canvas');
  canvas.width = 750;
  canvas.height = 1334;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas not supported');

  // 背景渐变
  const gradient = ctx.createLinearGradient(0, 0, 750, 1334);
  gradient.addColorStop(0, '#0F172A');
  gradient.addColorStop(0.5, '#1E293B');
  gradient.addColorStop(1, '#0F172A');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 750, 1334);

  // 顶部装饰线
  ctx.fillStyle = result.color;
  ctx.fillRect(0, 0, 750, 8);

  // Emoji
  ctx.font = '80px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(result.emoji, 375, 140);

  // 标题
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 48px sans-serif';
  ctx.fillText('我的测评结果', 375, 220);

  // 结果名称
  ctx.fillStyle = result.color;
  ctx.font = 'bold 64px sans-serif';
  ctx.fillText(result.name, 375, 320);

  // 副标题
  ctx.fillStyle = '#94A3B8';
  ctx.font = '28px sans-serif';
  ctx.fillText(result.subtitle, 375, 380);

  // 分隔线
  ctx.strokeStyle = result.color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(200, 420);
  ctx.lineTo(550, 420);
  ctx.stroke();

  // 描述
  ctx.fillStyle = '#CBD5E1';
  ctx.font = '24px sans-serif';
  const desc = result.description;
  const lines = wrapText(ctx, desc, 650, 24);
  let y = 470;
  for (const line of lines) {
    ctx.fillText(line, 375, y);
    y += 36;
  }

  // 核心优势
  y += 20;
  ctx.fillStyle = result.color;
  ctx.font = 'bold 28px sans-serif';
  ctx.fillText('✨ 核心优势', 80, y);
  y += 40;
  ctx.fillStyle = '#F1F5F9';
  ctx.font = '22px sans-serif';
  for (const s of result.strengths.slice(0, 3)) {
    ctx.fillText(`• ${s}`, 80, y);
    y += 32;
  }

  // 评分条
  y += 20;
  const sorted = Object.entries(allScores).sort(([, a], [, b]) => b - a).slice(0, 4);
  const topScore = sorted[0]?.[1] || 1;
  ctx.fillStyle = result.color;
  ctx.font = 'bold 28px sans-serif';
  ctx.fillText('📊 能力维度', 80, y);
  y += 45;
  for (const [key, score] of sorted) {
    const type = results.find((r) => r.id === key);
    if (!type) continue;
    const barW = (score / topScore) * 200;
    ctx.fillStyle = '#94A3B8';
    ctx.font = '20px sans-serif';
    ctx.fillText(`${type.emoji} ${type.name}`, 80, y);
    ctx.fillStyle = '#334155';
    ctx.fillRect(250, y - 12, 200, 20);
    ctx.fillStyle = type.color;
    ctx.fillRect(250, y - 12, barW, 20);
    ctx.fillStyle = '#F1F5F9';
    ctx.fillText(`${score}`, 470, y);
    y += 36;
  }

  // 号召语
  y += 40;
  ctx.fillStyle = '#F59E0B';
  ctx.font = 'bold 30px sans-serif';
  ctx.fillText('扫描二维码，测测你是什么类型 👇', 375, y);

  // 底部信息
  ctx.fillStyle = '#64748B';
  ctx.font = '20px sans-serif';
  ctx.fillText('天赋罗盘 · AI职业天赋测评', 375, y + 60);
  ctx.fillText('caicaianddengdeng.github.io/talent-compass', 375, y + 88);

  return canvas.toDataURL('image/png');
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number, fontSize: number): string[] {
  ctx.font = `${fontSize}px sans-serif`;
  const lines: string[] = [];
  let current = '';
  for (const char of text) {
    const test = current + char;
    if (ctx.measureText(test).width > maxWidth) {
      lines.push(current);
      current = char;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}
