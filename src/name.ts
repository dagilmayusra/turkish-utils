export function capitalizeTurkish(text: string): string {
  return text
    .toLowerCase()
    .replace(/ğ/g, 'ğ')
    .split(' ')
    .map(word => {
      if (!word) return word
      const first = word[0]
        .replace('i', 'İ')
        .replace('ı', 'I')
        .toUpperCase()
      return first + word.slice(1)
    })
    .join(' ')
}

// "user name" → "User Name"
// "işaret" → "İşaret"  (i → İ doğru!)