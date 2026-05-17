export function validateTCKN(tckn: string): boolean {
  // 11 hane olmalı ve sadece rakam
  if (!/^\d{11}$/.test(tckn)) return false

  // İlk hane 0 olamaz
  if (tckn[0] === '0') return false

  const digits = tckn.split('').map(Number)

  // 10. hane kontrolü
  const oddSum = digits[0] + digits[2] + digits[4] + digits[6] + digits[8]
  const evenSum = digits[1] + digits[3] + digits[5] + digits[7]
  const tenth = (oddSum * 7 - evenSum) % 10
  if (tenth !== digits[9]) return false

  // 11. hane kontrolü
  const totalSum = digits.slice(0, 10).reduce((a, b) => a + b, 0)
  if (totalSum % 10 !== digits[10]) return false

  return true
}