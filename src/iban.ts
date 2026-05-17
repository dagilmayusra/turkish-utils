export function formatIBAN(iban: string): string {
  const clean = iban.replace(/\s/g, '').toUpperCase()

  if (!/^TR\d{24}$/.test(clean)) {
    throw new Error('Geçersiz Türkiye IBAN numarası')
  }

  return clean.match(/.{1,4}/g)!.join(' ')
}

// "TRxxxxxxxxxxxxxxxxxxxxxxxx" → "TRxx xxxx xxxx xxxx xxxx xxxx xx"