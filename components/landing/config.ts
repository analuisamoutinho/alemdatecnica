/** Oferta confirmada pela responsável em 25/09/2026. */
export const offer = {
  name: 'Além da Técnica',
  price: 37,
  currency: 'BRL',
  recurrence: 'monthly',
  checkoutUrl: 'https://pay.hotmart.com/D107764184G',
  termsUrl: '',
  privacyUrl: '',
  supportUrl: '',
} as const;

export function checkoutWithAttribution(base: string): string {
  if (!base) return '';
  const url = new URL(base);
  if (url.protocol !== 'https:') throw new Error('O checkout precisa usar HTTPS.');
  if (typeof window !== 'undefined') {
    const current = new URLSearchParams(window.location.search);
    ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(key => {
      const value = current.get(key);
      if (value) url.searchParams.set(key, value.slice(0, 200));
    });
  }
  return url.toString();
}
