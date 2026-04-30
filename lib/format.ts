const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY ?? 'BDT';
const LOCALE   = process.env.NEXT_PUBLIC_LOCALE   ?? 'en-IN';

/* For BDT we render `৳ 1,990` — Intl's BDT output is "BDT 1,990.00" or
   "৳1,990.00" depending on host ICU; both look heavy on a product card.
   We format the number portion ourselves and prepend the taka glyph. */
export function fmtMoney(n: number, currency = CURRENCY, locale = LOCALE) {
  if (currency === 'BDT') {
    const num = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(Math.round(n));
    return `৳ ${num}`;
  }
  try {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(n);
  } catch {
    return `${currency} ${n.toFixed(2)}`;
  }
}

export function fmtDate(d: Date | string, locale = LOCALE) {
  const date = typeof d === 'string' ? new Date(d) : d;
  return new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(date);
}

export function discountPct(price: number, oldPrice: number | null) {
  if (!oldPrice || oldPrice <= price) return 0;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}

export function plural(n: number, one: string, many: string) {
  return `${n} ${n === 1 ? one : many}`;
}
