import Link from 'next/link';
import NewsletterForm from './NewsletterForm';

const COLS = [
  {
    h: 'Shop · কেনাকাটা',
    items: [
      { href: '/c/health',  label: 'Health',  bn: 'স্বাস্থ্য' },
      { href: '/c/beauty',  label: 'Beauty',  bn: 'সৌন্দর্য' },
      { href: '/c/hygiene', label: 'Hygiene', bn: 'হাইজিন' },
      { href: '/c/food',    label: 'Food',    bn: 'খাবার' },
      { href: '/c?sale=1',  label: 'Hot deals', bn: 'অফার' },
    ],
  },
  {
    h: 'Company · কোম্পানি',
    items: [
      { href: '/about',   label: 'About us',     bn: 'আমাদের সম্পর্কে' },
      { href: '/farms',   label: 'Our producers',bn: 'উৎপাদকরা' },
      { href: '/journal', label: 'Journal',      bn: 'ব্লগ' },
    ],
  },
  {
    h: 'Care · কেয়ার',
    items: [
      { href: '/policies/shipping', label: 'Shipping',  bn: 'ডেলিভারি' },
      { href: '/policies/returns',  label: 'Returns',   bn: 'রিটার্ন' },
      { href: '/contact',           label: 'Contact us',bn: 'যোগাযোগ' },
      { href: '/account',           label: 'Account',   bn: 'অ্যাকাউন্ট' },
    ],
  },
];

const PAY = ['bKash', 'Nagad', 'Rocket', 'Visa', 'Mastercard', 'COD'];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/75 mt-12">
      {/* Newsletter strip */}
      <div className="bg-green-dark">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-12 py-6 grid sm:grid-cols-[1fr_auto] items-center gap-4">
          <div>
            <h3 className="text-white text-[18px] font-extrabold leading-tight">
              Get 10% off your first order
            </h3>
            <p className="bn text-white/85 text-[13.5px] font-medium">
              নতুন অফার ও পণ্যের খবর সবার আগে পান
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      <div className="px-5 sm:px-12 pt-12 pb-6">
        <div className="max-w-[1360px] mx-auto grid gap-8 sm:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr] mb-8">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2.5 text-white text-[20px] font-extrabold">
              <span aria-hidden className="w-8 h-8 rounded-full bg-green inline-flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 48 48">
                  <path d="M24 12 C 16 18, 16 30, 24 38 C 32 30, 32 18, 24 12 Z" fill="#fff"/>
                </svg>
              </span>
              Green<span className="text-green-soft">Kart</span> <span className="text-sale">Bazar</span>
            </span>
            <p className="text-[13px] max-w-[36ch] leading-relaxed">
              Certified-organic food, wellness, and natural care from trusted producers — delivered across Bangladesh.
            </p>
            <p className="bn text-[13px] max-w-[34ch] leading-relaxed text-white/70">
              সারা বাংলাদেশে অর্গানিক ও প্রাকৃতিক পণ্য, বিশ্বস্ত উৎপাদকদের কাছ থেকে।
            </p>

            <div className="mt-1">
              <small className="block text-[11px] uppercase tracking-widest text-white/60 mb-1">Hotline · হটলাইন</small>
              <a href="tel:+8801700000000" className="text-[20px] font-extrabold text-accent hover:text-white transition-colors">
                16XXX
              </a>
              <span className="block text-[12px] text-white/60 mt-0.5">Daily 9am – 11pm · প্রতিদিন</span>
            </div>
          </div>

          {COLS.map(col => (
            <div key={col.h}>
              <h6 className="text-white text-[12px] font-bold tracking-wider uppercase mb-4">{col.h}</h6>
              {col.items.map(it => (
                <Link key={it.href} href={it.href} className="block py-1 hover:text-green-soft transition-colors">
                  <span className="text-[13px]">{it.label}</span>
                  <span className="bn text-[11.5px] text-white/55"> · {it.bn}</span>
                </Link>
              ))}
            </div>
          ))}

          <div>
            <h6 className="text-white text-[12px] font-bold tracking-wider uppercase mb-4">We accept · পেমেন্ট</h6>
            <div className="flex flex-wrap gap-1.5">
              {PAY.map(p => (
                <span key={p} className="text-[10.5px] tracking-wider uppercase text-white/85 font-semibold px-2.5 py-1 rounded bg-white/10 border border-white/10">
                  {p}
                </span>
              ))}
            </div>
            <small className="block text-[11.5px] text-white/55 mt-3 leading-relaxed">
              Secure SSL checkout. Cash on delivery available across Bangladesh.
            </small>
          </div>
        </div>

        <div className="max-w-[1360px] mx-auto flex flex-wrap gap-5 justify-between items-center pt-5 border-t border-white/10 text-[11.5px] text-white/55">
          <small>© 2026 GreenKart Bazar · A scaffold demo, not a live retailer.</small>
          <small>
            <Link href="/policies/privacy" className="hover:text-green-soft">Privacy</Link> ·{' '}
            <Link href="/policies/terms" className="hover:text-green-soft">Terms</Link> ·{' '}
            <Link href="/policies/cookies" className="hover:text-green-soft">Cookies</Link>
          </small>
        </div>
      </div>
    </footer>
  );
}
