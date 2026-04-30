import Link from 'next/link';
import CartButton from './CartButton';
import SearchBox from './SearchBox';

const NAV = [
  { href: '/c/health',  label: 'Health',  labelBn: 'স্বাস্থ্য',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z"/>
      </svg>
    )},
  { href: '/c/beauty',  label: 'Beauty',  labelBn: 'সৌন্দর্য',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3c4 4 4 9 0 14C8 12 8 7 12 3Z"/><path d="M12 17v4"/>
      </svg>
    )},
  { href: '/c/hygiene', label: 'Hygiene', labelBn: 'হাইজিন',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 8h14l-1.5 11a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2L5 8Z"/><path d="M9 8V5a3 3 0 0 1 6 0v3"/>
      </svg>
    )},
  { href: '/c/food',    label: 'Food',    labelBn: 'খাবার',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 11c0-4 3-7 8-7s8 3 8 7c0 1.5-.5 3-1.5 4l1 5h-15l1-5C4.5 14 4 12.5 4 11Z"/>
      </svg>
    )},
];

const QUICK = [
  { href: '/c/food?q=honey',     label: 'Raw Honey',    labelBn: 'খাঁটি মধু' },
  { href: '/c/food?q=ghee',      label: 'Pure Ghee',    labelBn: 'খাঁটি ঘি' },
  { href: '/c/food?q=tea',       label: 'Loose Tea',    labelBn: 'লুজ চা' },
  { href: '/c/food?q=oil',       label: 'Olive Oil',    labelBn: 'অলিভ অয়েল' },
  { href: '/c/health?q=collagen',label: 'Collagen',     labelBn: 'কলাজেন' },
  { href: '/c/beauty?q=oil',     label: 'Hair & Skin',  labelBn: 'চুল ও ত্বক' },
];

export default function Header() {
  return (
    <>
      {/* Top promo strip — red, marquee feel without animation */}
      <div className="bg-sale text-white text-[12.5px]">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-12 py-2 flex flex-wrap justify-between gap-4">
          <span className="flex items-center gap-2">
            <span aria-hidden>🟢</span>
            <span>Free delivery over ৳ 1,500 in Dhaka · ক্যাশ অন ডেলিভারি available</span>
          </span>
          <span className="hidden sm:flex items-center gap-3 opacity-95">
            <Link href="/track" className="hover:underline">Track order</Link>
            <span aria-hidden>·</span>
            <Link href="/contact" className="hover:underline">Help</Link>
            <span aria-hidden>·</span>
            <a href="tel:+8801700000000" className="hover:underline">+880 17 0000 0000</a>
          </span>
        </div>
      </div>

      {/* Main row — logo, search, hotline, account, cart */}
      <header className="sticky top-0 z-30 bg-paper border-b border-rule shadow-sm">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-12 py-3.5 grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1fr_auto_auto] items-center gap-5">
          <Link href="/" className="flex items-center gap-3" aria-label="GreenKart Bazar home">
            <span aria-hidden className="inline-flex">
              <svg width={42} height={42} viewBox="0 0 48 48">
                <circle cx={24} cy={24} r={22} fill="#3a8a2e" />
                <path d="M24 12 C 16 18, 16 30, 24 38 C 32 30, 32 18, 24 12 Z" fill="#fff" />
                <path d="M24 12 L 24 38" stroke="#3a8a2e" strokeWidth={1.5} />
              </svg>
            </span>
            <span className="flex flex-col leading-tight">
              <b className="text-[20px] font-extrabold text-ink tracking-tight">
                Green<span className="text-green-dark">Kart</span> <span className="text-sale">Bazar</span>
              </b>
              <small className="bn text-[12px] text-muted font-medium">প্রকৃতির ভাণ্ডার, আপনার দরজায়</small>
            </span>
          </Link>

          <SearchBox />

          {/* Hotline — desktop only */}
          <div className="hidden sm:flex items-center gap-2.5">
            <span className="w-10 h-10 rounded-full bg-sale-soft inline-flex items-center justify-center" aria-hidden>
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#d62828" strokeWidth={1.8}>
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.9 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.8.2 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
              </svg>
            </span>
            <span className="leading-tight">
              <small className="block bn text-[10.5px] text-muted font-medium">অর্ডার করতে কল করুন</small>
              <a href="tel:+8801700000000" className="text-[16px] text-sale font-extrabold tracking-tight hover:text-sale-dark">
                16XXX
              </a>
            </span>
          </div>

          <div className="flex items-center gap-2 justify-end">
            <Link href="/account" className="hidden sm:inline-flex w-10 h-10 rounded-full bg-surface text-ink items-center justify-center hover:bg-green-pale hover:text-green-dark transition-colors" aria-label="Account">
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} />
              </svg>
            </Link>
            <CartButton />
          </div>
        </div>

        {/* Category icon strip — round green pills with icons */}
        <nav aria-label="Categories" className="bg-green-pale border-t border-rule-soft">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-12 py-3 flex gap-2 sm:gap-4 overflow-x-auto">
            <Link href="/c" className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold text-white bg-green hover:bg-green-dark transition-colors">
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x={3} y={3} width={7} height={7} rx={1.5}/>
                <rect x={14} y={3} width={7} height={7} rx={1.5}/>
                <rect x={3} y={14} width={7} height={7} rx={1.5}/>
                <rect x={14} y={14} width={7} height={7} rx={1.5}/>
              </svg>
              All Categories
            </Link>
            {NAV.map(n => (
              <Link
                key={n.href}
                href={n.href}
                className="flex-shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[13px] font-semibold text-ink bg-paper hover:bg-green hover:text-white border border-rule transition-colors"
              >
                <span className="w-4 h-4 inline-flex" aria-hidden>{n.icon}</span>
                <span>{n.label}</span>
                <span className="bn text-[11px] opacity-70">/ {n.labelBn}</span>
              </Link>
            ))}
            <span className="flex-shrink-0 inline-flex items-center text-muted text-[12px] font-medium ml-2">|</span>
            {QUICK.map(q => (
              <Link
                key={q.href}
                href={q.href}
                className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-[12.5px] font-medium text-ink-2 hover:text-green-dark transition-colors"
              >
                {q.label}
                <span className="bn text-[11px] text-muted">· {q.labelBn}</span>
              </Link>
            ))}
            <Link href="/c?sale=1" className="flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[12.5px] font-bold text-white bg-sale hover:bg-sale-dark ml-auto transition-colors">
              <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z"/>
                <circle cx={8} cy={8} r={1.5}/>
              </svg>
              Hot Deals
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
