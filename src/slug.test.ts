import { describe, test, expect } from 'vitest'
import { toTurkishSlug } from './slug'
import { formatPhone } from './phone'
import { validateTCKN } from './tckn'
import { formatIBAN } from './iban'
import { formatCurrency } from './currency'
import { validatePlate, formatPlate } from './plate'
import { capitalizeTurkish } from './name'

describe('toTurkishSlug', () => {
  test('Türkçe karakterleri dönüştürür', () => {
    expect(toTurkishSlug('Merhaba Dünya')).toBe('merhaba-dunya')
    expect(toTurkishSlug('İstanbul')).toBe('istanbul')
    expect(toTurkishSlug('Şeker Çay')).toBe('seker-cay')
  })

  test('Boşlukları tire yapar', () => {
    expect(toTurkishSlug('merhaba dünya')).toBe('merhaba-dunya')
  })

  test('Özel karakterleri temizler', () => {
    expect(toTurkishSlug('Merhaba! Dünya?')).toBe('merhaba-dunya')
  })
})

describe('formatPhone', () => {
  test('Telefonu formatlar', () => {
    expect(formatPhone('05321234567')).toBe('0532 123 45 67')
  })

  test('Geçersiz numarada hata fırlatır', () => {
    expect(() => formatPhone('123')).toThrow('Geçersiz telefon numarası')
  })
})

describe('validateTCKN', () => {
  test('Geçerli TC Kimlik numarasını doğrular', () => {
    expect(validateTCKN('10000000146')).toBe(true)
  })

  test('11 haneden az olursa false döner', () => {
    expect(validateTCKN('1234567890')).toBe(false)
  })

  test('İlk hane 0 olursa false döner', () => {
    expect(validateTCKN('01234567890')).toBe(false)
  })

  test('Yanlış rakamlarla false döner', () => {
    expect(validateTCKN('12345678901')).toBe(false)
  })

  test('Harf içerirse false döner', () => {
    expect(validateTCKN('1234567890a')).toBe(false)
  })
})

describe('formatIBAN', () => {
  test('IBAN formatlar', () => {
    expect(formatIBAN('TR330006100519786457841326')).toBe('TR33 0006 1005 1978 6457 8413 26')
  })

  test('Geçersiz IBAN hata fırlatır', () => {
    expect(() => formatIBAN('TR123')).toThrow('Geçersiz Türkiye IBAN numarası')
  })
})

describe('formatCurrency', () => {
  test('TL formatlar', () => {
    expect(formatCurrency(1234.56)).toBe('₺1.234,56')
  })

  test('Dolar formatlar', () => {
    expect(formatCurrency(1234.56, 'USD')).toBe('$1.234,56')
  })
})

describe('validatePlate', () => {
  test('Geçerli plakayı doğrular', () => {
    expect(validatePlate('34ABC123')).toBe(true)
  })

  test('Geçersiz plakayı reddeder', () => {
    expect(validatePlate('999ABC123')).toBe(false)
  })
})

describe('formatPlate', () => {
  test('Plakayı formatlar', () => {
    expect(formatPlate('34ABC123')).toBe('34 ABC123')
  })
})

describe('capitalizeTurkish', () => {
  test('Türkçe ismi büyük harfle yazar', () => {
    expect(capitalizeTurkish('ahmet yılmaz')).toBe('Ahmet Yılmaz')
  })

  test('i harfini İ yapar', () => {
    expect(capitalizeTurkish('işaret')).toBe('İşaret')
  })
})