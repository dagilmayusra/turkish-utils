export function formatCurrency(
  amount: number,
  currency: 'TRY' | 'USD' | 'EUR' = 'TRY'
): string {
  const symbols: Record<string, string> = {
    TRY: '₺',
    USD: '$',
    EUR: '€',
  }

  const formatted = amount.toLocaleString('tr-TR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return `${symbols[currency]}${formatted}`
}

// formatCurrency(1234.56)        → "₺1.234,56"
// formatCurrency(1234.56, 'USD') → "$1.234,56"