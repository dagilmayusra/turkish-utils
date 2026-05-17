// src/slug.ts
function toTurkishSlug(text) {
  return text.replace(/İ/g, "i").replace(/Ğ/g, "g").replace(/Ü/g, "u").replace(/Ş/g, "s").replace(/Ö/g, "o").replace(/Ç/g, "c").toLowerCase().replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s").replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "c").replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}

// src/phone.ts
function formatPhone(phone) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length !== 11) {
    throw new Error("Ge\xE7ersiz telefon numaras\u0131");
  }
  return digits.replace(/(\d{4})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
}

// src/tckn.ts
function validateTCKN(tckn) {
  if (!/^\d{11}$/.test(tckn)) return false;
  if (tckn[0] === "0") return false;
  const digits = tckn.split("").map(Number);
  const oddSum = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
  const evenSum = digits[1] + digits[3] + digits[5] + digits[7];
  const tenth = (oddSum * 7 - evenSum) % 10;
  if (tenth !== digits[9]) return false;
  const totalSum = digits.slice(0, 10).reduce((a, b) => a + b, 0);
  if (totalSum % 10 !== digits[10]) return false;
  return true;
}

// src/iban.ts
function formatIBAN(iban) {
  const clean = iban.replace(/\s/g, "").toUpperCase();
  if (!/^TR\d{24}$/.test(clean)) {
    throw new Error("Ge\xE7ersiz T\xFCrkiye IBAN numaras\u0131");
  }
  return clean.match(/.{1,4}/g).join(" ");
}

// src/currency.ts
function formatCurrency(amount, currency = "TRY") {
  const symbols = {
    TRY: "\u20BA",
    USD: "$",
    EUR: "\u20AC"
  };
  const formatted = amount.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return `${symbols[currency]}${formatted}`;
}

// src/plate.ts
function validatePlate(plate) {
  const clean = plate.replace(/\s/g, "").toUpperCase();
  return /^(0[1-9]|[1-7][0-9]|8[01])[A-Z]{1,3}\d{2,4}$/.test(clean);
}
function formatPlate(plate) {
  const clean = plate.replace(/\s/g, "").toUpperCase();
  if (!validatePlate(clean)) throw new Error("Ge\xE7ersiz plaka");
  const city = clean.slice(0, 2);
  const rest = clean.slice(2);
  return `${city} ${rest}`;
}

// src/name.ts
function capitalizeTurkish(text) {
  return text.toLowerCase().replace(/ğ/g, "\u011F").split(" ").map((word) => {
    if (!word) return word;
    const first = word[0].replace("i", "\u0130").replace("\u0131", "I").toUpperCase();
    return first + word.slice(1);
  }).join(" ");
}
export {
  capitalizeTurkish,
  formatCurrency,
  formatIBAN,
  formatPhone,
  formatPlate,
  toTurkishSlug,
  validatePlate,
  validateTCKN
};
