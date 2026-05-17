export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  
  if (digits.length !== 11) {
    throw new Error('Geçersiz telefon numarası')
  }

  return digits.replace(/(\d{4})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4')
}