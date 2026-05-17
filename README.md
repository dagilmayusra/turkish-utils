# turkish-utils 🇹🇷

Türkçe karakter ve formatlama yardımcıları.

## Kurulum

```bash
npm install turkish-utils
```

## Kullanım

```typescript
import { 
  toTurkishSlug, 
  formatPhone, 
  validateTCKN,
  formatIBAN,
  formatCurrency,
  validatePlate,
  formatPlate,
  capitalizeTurkish
} from 'turkish-utils'
```

## Fonksiyonlar

### `toTurkishSlug(text)`
```typescript
toTurkishSlug('İstanbul Şehri')  // → "istanbul-sehri"
toTurkishSlug('Merhaba Dünya!')  // → "merhaba-dunya"
```

### `formatPhone(phone)`
```typescript
formatPhone('05321234567')  // → "0532 123 45 67"
```

### `validateTCKN(tckn)`
```typescript
validateTCKN('10000000146')  // → true
validateTCKN('12345678901')  // → false
```

### `formatIBAN(iban)`
```typescript
formatIBAN('TR330006100519786457841326')  
// → "TRxx xxxx xxxx xxxx xxxx xxxx xx"
```

### `formatCurrency(amount, currency?)`
```typescript
formatCurrency(1234.56)         // → "₺1.234,56"
formatCurrency(1234.56, 'USD')  // → "$1.234,56"
formatCurrency(1234.56, 'EUR')  // → "€1.234,56"
```

### `validatePlate(plate)`
```typescript
validatePlate('34ABC123')  // → true
validatePlate('999ABC123') // → false
```

### `formatPlate(plate)`
```typescript
formatPlate('34ABC123')  // → "34 ABC123"
```

### `capitalizeTurkish(text)`
```typescript
capitalizeTurkish('ahmet yılmaz')  // → "User Name"
capitalizeTurkish('işaret')        // → "İşaret"
```