// 智能裁剪支付宝收款码截图
// 通过检测高对比度区域定位二维码，裁为正方形
import sharp from 'sharp';

const INPUT = 'public/alipay-qr.jpg';
const OUTPUT = 'public/alipay-qr.jpg';  // 原地替换

async function cropQR() {
  const img = sharp(INPUT);
  const { width, height } = await img.metadata();

  // 缩放到合理大小再分析（加速）
  const scale = Math.min(1, 400 / width);
  const sw = Math.round(width * scale);
  const sh = Math.round(height * scale);

  const { data, info } = await img
    .resize(sw, sh)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = data;
  const channels = info.channels;

  // 分块计算方差，高方差=高对比度=可能是二维码
  const blockSize = 40;
  const cols = Math.floor(sw / blockSize);
  const rows = Math.floor(sh / blockSize);
  let bestRow = 0, bestCol = 0, bestVar = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let sum = 0, sumSq = 0, count = 0;
      for (let y = r * blockSize; y < (r + 1) * blockSize && y < sh; y++) {
        for (let x = c * blockSize; x < (c + 1) * blockSize && x < sw; x++) {
          const idx = (y * sw + x) * channels;
          const gray = pixels[idx] * 0.299 + pixels[idx + 1] * 0.587 + pixels[idx + 2] * 0.114;
          sum += gray;
          sumSq += gray * gray;
          count++;
        }
      }
      const mean = sum / count;
      const variance = sumSq / count - mean * mean;
      if (variance > bestVar) {
        bestVar = variance;
        bestRow = r;
        bestCol = c;
      }
    }
  }

  // 以高方差区块为中心，扩展为正方形
  const cx = (bestCol + 0.5) * blockSize / scale;
  const cy = (bestRow + 0.5) * blockSize / scale;
  const qrSize = Math.min(width, height) * 0.6; // 预计二维码占屏幕60%
  const half = qrSize / 2;

  let left = Math.round(Math.max(0, cx - half));
  let top = Math.round(Math.max(0, cy - half));
  let size = Math.round(qrSize);

  // 确保不超出边界
  if (left + size > width) left = width - size;
  if (top + size > height) top = height - size;
  size = Math.min(size, width - left, height - top);

  // 再加20%边距
  const pad = Math.round(size * 0.2);
  left = Math.max(0, left - pad);
  top = Math.max(0, top - pad);
  size = Math.round(size + pad * 2);
  size = Math.min(size, width - left, height - left);

  console.log(`原图: ${width}x${height}`);
  console.log(`二维码中心: (${Math.round(cx)}, ${Math.round(cy)}), 方差: ${bestVar.toFixed(0)}`);
  console.log(`裁剪: left=${left} top=${top} size=${size}`);

  await img
    .extract({ left, top, width: size, height: size })
    .resize(400, 400)
    .jpeg({ quality: 85 })
    .toFile(OUTPUT + '.tmp');

  // 替换原文件
  const fs = await import('fs');
  fs.renameSync(OUTPUT + '.tmp', OUTPUT);

  const newMeta = await sharp(OUTPUT).metadata();
  console.log(`结果: ${newMeta.width}x${newMeta.height}, ${(fs.statSync(OUTPUT).size / 1024).toFixed(0)}KB`);
  console.log('裁剪完成 ✅');
}

cropQR().catch(err => { console.error(err.message); process.exit(1); });
