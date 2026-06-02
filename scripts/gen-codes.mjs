// 生成 50 个激活码 + 哈希（与 codes.ts 的 hashCode 算法一致）
// 运行: node scripts/gen-codes.mjs

const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function seg() {
  let s = '';
  for (let i = 0; i < 4; i++) s += CHARS[Math.floor(Math.random() * CHARS.length)];
  return s;
}

function generateCode() {
  return `TALENT-${seg()}-${seg()}`;
}

// 与 codes.ts 中 hashCode 完全一致的算法
function hashCode(code) {
  let hash = 0;
  for (let i = 0; i < code.length; i++) {
    const char = code.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  const hex = (hash >>> 0).toString(16).padStart(8, '0');
  const hex2 = ((hash * 31) >>> 0).toString(16).padStart(8, '0');
  return (hex + hex2).slice(0, 16);
}

const codes = [];
const hashes = [];

for (let i = 0; i < 50; i++) {
  const code = generateCode();
  const hash = hashCode(code);
  codes.push(code);
  hashes.push(hash);
}

console.log('// 激活码（发给付费用户，一码一用）:');
console.log('// ============================================');
codes.forEach(c => console.log(`// ${c}`));
console.log('// ============================================\n');

console.log('// CODE_HASHES — 复制到 src/data/codes.ts:');
console.log('export const CODE_HASHES: string[] = [');
hashes.forEach(h => console.log(`  '${h}',`));
console.log('];');

// 验证
console.log('\n// 验证测试:');
for (let i = 0; i < 3; i++) {
  console.log(`// ${codes[i]} → hashCode=${hashes[i]} → verify=${hashes[i] === hashCode(codes[i]) ? '✅' : '❌'}`);
}
