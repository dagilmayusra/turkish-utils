export function validatePlate(plate: string): boolean {
  const clean = plate.replace(/\s/g, '').toUpperCase() 
  return /^(0[1-9]|[1-7][0-9]|8[01])[A-Z]{1,3}\d{2,4}$/.test(clean)
}

export function formatPlate(plate: string): string {
  const clean = plate.replace(/\s/g, '').toUpperCase()
  if (!validatePlate(clean)) throw new Error('Geçersiz plaka')
  
  const city = clean.slice(0, 2)
  const rest = clean.slice(2)
  return `${city} ${rest}`
}

// "34ABC123" → "34 ABC123"
// "06AB1234" → "06 AB1234"