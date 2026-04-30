import Image from 'next/image';
import Link from 'next/link';

/* Inline promo banner — sits between product rows, ghorerbazar-style. */
export default function PromoBanner() {
  return (
    <section className="max-w-[1360px] mx-auto px-5 sm:px-12 my-10">
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Left card — sale */}
        <div className="relative overflow-hidden rounded-md border border-rule bg-gradient-to-br from-sale to-sale-dark text-white p-6 sm:p-8 min-h-[180px] flex flex-col justify-center">
          <span className="text-[11px] font-bold tracking-widest uppercase text-white/80 mb-1">
            Hot deal · গরম অফার
          </span>
          <h3 className="text-[22px] sm:text-[26px] font-extrabold leading-tight mb-1">
            Save up to <span className="text-accent">25%</span> on pantry essentials
          </h3>
          <p className="bn text-[14px] text-white/90 mb-4">
            প্রতিদিনের রান্নাঘরের পণ্যে ছাড়
          </p>
          <Link
            href="/c?sale=1"
            className="inline-flex items-center gap-2 self-start bg-paper text-sale font-bold text-[13px] tracking-wider uppercase px-4 py-2 rounded-full hover:bg-accent hover:text-ink transition-colors cursor-pointer"
          >
            Shop deals →
          </Link>
          <Image
            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80&auto=format&fit=crop"
            alt=""
            width={220} height={220}
            aria-hidden
            className="absolute -right-6 -bottom-6 w-44 h-44 sm:w-52 sm:h-52 object-cover rounded-full opacity-30 mix-blend-luminosity"
          />
        </div>

        {/* Right card — green */}
        <div className="relative overflow-hidden rounded-md border border-rule bg-gradient-to-br from-green to-green-dark text-white p-6 sm:p-8 min-h-[180px] flex flex-col justify-center">
          <span className="text-[11px] font-bold tracking-widest uppercase text-white/80 mb-1">
            New arrivals · নতুন এসেছে
          </span>
          <h3 className="text-[22px] sm:text-[26px] font-extrabold leading-tight mb-1">
            Single-orchard nuts & cold-pressed oils
          </h3>
          <p className="bn text-[14px] text-white/90 mb-4">
            একক বাগানের বাদাম, কোল্ড-প্রেসড তেল
          </p>
          <Link
            href="/c/food"
            className="inline-flex items-center gap-2 self-start bg-paper text-green-dark font-bold text-[13px] tracking-wider uppercase px-4 py-2 rounded-full hover:bg-accent hover:text-ink transition-colors cursor-pointer"
          >
            Browse food →
          </Link>
          <Image
            src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80&auto=format&fit=crop"
            alt=""
            width={220} height={220}
            aria-hidden
            className="absolute -right-6 -bottom-6 w-44 h-44 sm:w-52 sm:h-52 object-cover rounded-full opacity-30 mix-blend-luminosity"
          />
        </div>
      </div>
    </section>
  );
}
