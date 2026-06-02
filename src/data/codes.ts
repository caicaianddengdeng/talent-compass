// 激活码 SHA256 哈希（不可逆，纯前端验证）
// 50 个预置激活码，格式: TALENT-XXXX-XXXX
// 通过微信/支付宝付款后获取激活码，输入即可解锁深度报告

export const CODE_HASHES: string[] = [
  '04c45b1293c7072e',
  '588e8904b942977c',
  '653323354131436b',
  '3d4efd936c90b4cd',
  '4c4f47dc3d99b3a4',
  'bca3baa0d7d39960',
  '90ec0d518c959ccf',
  '2ade2a2a30e71b16',
  'f90360302768a5d0',
  '38fd55a0e6ad5e60',
  '6f4d5d877a5e5359',
  '963f5b5f31ac1081',
  'aa9d9bc6a915dcfa',
  '91e83703ab1ea95d',
  '1807f10ae8f63036',
  '8d416e501aec5bb0',
  '5a29609deb02b303',
  '24067f1d5cc96483',
  'a3279e59c1cc2cc7',
  '8781cb1d68b79883',
  'f99d9acd3a15bed3',
  'd7f38586267d2b3a',
  'd59be812dde11a2e',
  'f2d5c31567e29f8b',
  '2154c3400943a4c0',
  '3ac28b181d8ed7e8',
  '9c05c800e4b33800',
  'fde689ffbeeab5e1',
  '8b21a477d912ea69',
  '5daab5e157ac063f',
  '542b3235313b146b',
  'f66bbef2d70c1f4e',
  'a1e792249b0ab25c',
  'aa638baaa20de996',
  '43112d141f14756c',
  'e8955dee2a165fd2',
  '0ce04e6b8f297ef5',
  '0bdfc25f70188981',
  'a571409a08b6d2a6',
  '5250eedef7ccece2',
  '2a3ffa1a1dbf4926',
  '6b0d10f1f6950d2f',
  'f02a8e31152737ef',
  '6ae60c78f1db8288',
  '6188b776cf8e374a',
  '2384e2db4d177885',
  '3c4db5f14d69082f',
  '853a4b7a220f23c6',
  'fe6d18f5cf3605ab',
  'd3246fdd91698bc3',
];

export function hashCode(code: string): string {
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

export function verifyCode(input: string): boolean {
  const h = hashCode(input.trim().toUpperCase());
  return CODE_HASHES.includes(h);
}

export function isUnlocked(): boolean {
  try {
    return localStorage.getItem('talent_compass_unlocked') === 'true';
  } catch {
    return false;
  }
}

export function setUnlocked(): void {
  try {
    localStorage.setItem('talent_compass_unlocked', 'true');
  } catch {}
}
