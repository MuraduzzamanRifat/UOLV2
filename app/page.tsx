import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import PromoBanner from '@/components/PromoBanner';
import { listProducts } from '@/lib/catalog';

const TILES = [
  { slug: 'health',  label: 'Health & Strength', bn: 'স্বাস্থ্য',  desc: 'Supplements, tinctures, collagen', emoji: '💚' },
  { slug: 'beauty',  label: 'Beauty & Wellness', bn: 'সৌন্দর্য',   desc: 'Skincare, hair, essential oils',   emoji: '🌸' },
  { slug: 'hygiene', label: 'Home & Hygiene',    bn: 'হাইজিন',     desc: 'Oral care, soap, deodorants',      emoji: '🛁' },
  { slug: 'food',    label: 'Food & Drinks',     bn: 'খাবার',      desc: 'Honey, ghee, tea, oil, superfoods',emoji: '🍯' },
];

export default async function HomePage() {
  const { items: featured }    = await listProducts({ sort: 'featured', take: 12 });
  const { items: bestsellers } = await listProducts({ sort: 'rating',   take: 8 });

  return (
    <>
      <Hero />
      <TrustStrip />

      {/* Category tiles */}
      <section className="max-w-[1360px] mx-auto px-5 sm:px-12 mt-10">
        <header className="flex justify-between items-baseline mb-5">
          <h2 className="text-[20px] sm:text-[24px] font-extrabold text-ink">
            Shop by category
            <span className="bn text-[15px] text-muted font-medium ml-2">/ ক্যাটাগরি</span>
          </h2>
        </header>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {TILES.map(t => (
            <Link
              key={t.slug}
              href={`/c/${t.slug}`}
              className="group border border-rule rounded-md p-5 sm:p-6 bg-paper hover:border-green hover:shadow-md transition-all flex items-center gap-4 cursor-pointer"
            >
              <span aria-hidden className="text-3xl sm:text-4xl flex-shrink-0">{t.emoji}</span>
              <span className="flex flex-col gap-0.5 leading-tight">
                <strong className="text-[15px] sm:text-[16px] text-ink group-hover:text-green-dark">{t.label}</strong>
                <small className="bn text-[12.5px] text-green-dark font-semibold">{t.bn}</small>
                <small className="text-[11.5px] text-muted">{t.desc}</small>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-[1360px] mx-auto px-5 sm:px-12 mt-12">
        <header className="flex justify-between items-baseline mb-5">
          <h2 className="text-[20px] sm:text-[24px] font-extrabold text-ink">
            Featured this week
            <span className="bn text-[15px] text-muted font-medium ml-2">/ এই সপ্তাহের ফিচারড</span>
          </h2>
          <Link href="/c" className="text-[12.5px] font-semibold text-green-dark hover:text-sale">View all →</Link>
        </header>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <PromoBanner />

      {/* Bestsellers */}
      <section className="max-w-[1360px] mx-auto px-5 sm:px-12 mb-14">
        <header className="flex justify-between items-baseline mb-5">
          <h2 className="text-[20px] sm:text-[24px] font-extrabold text-ink">
            Bestsellers
            <span className="bn text-[15px] text-muted font-medium ml-2">/ বেস্টসেলার</span>
          </h2>
          <Link href="/c?sort=rating" className="text-[12.5px] font-semibold text-green-dark hover:text-sale">View all →</Link>
        </header>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {bestsellers.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </>
  );
}
