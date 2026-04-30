type Item = { en: string; bn: string; icon: React.ReactNode };

const ITEMS: Item[] = [
  {
    en: 'Free delivery over ৳ 1,500',
    bn: '১৫০০৳-এর উপরে ফ্রি ডেলিভারি',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 16V6h11v10H3Z"/><path d="M14 9h4l3 3v4h-7"/>
        <circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>
      </svg>
    ),
  },
  {
    en: 'Cash on delivery',
    bn: 'ক্যাশ অন ডেলিভারি',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="6" width="20" height="12" rx="2"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    en: '100% certified organic',
    bn: '১০০% সার্টিফাইড অর্গানিক',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/>
      </svg>
    ),
  },
  {
    en: 'Easy 7-day return',
    bn: '৭ দিনের সহজ রিটার্ন',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 12a9 9 0 0 1 15.7-6"/><path d="M21 4v6h-6"/>
        <path d="M21 12a9 9 0 0 1-15.7 6"/><path d="M3 20v-6h6"/>
      </svg>
    ),
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-paper border-y border-rule">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-12 py-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
        {ITEMS.map((it, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-green-pale text-green-dark inline-flex items-center justify-center flex-shrink-0">
              <span className="w-5 h-5 inline-flex">{it.icon}</span>
            </span>
            <span className="leading-tight">
              <b className="block text-[12.5px] sm:text-[13.5px] font-bold text-ink">{it.en}</b>
              <small className="bn block text-[11.5px] text-muted font-medium">{it.bn}</small>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
