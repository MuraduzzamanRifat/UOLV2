'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import type { ProductSummary } from '@/types';

const CATS = [
  { key: 'all',     label: 'All',                 href: '/c' },
  { key: 'health',  label: 'Health & Strength',   href: '/c/health' },
  { key: 'beauty',  label: 'Beauty & Wellness',   href: '/c/beauty' },
  { key: 'hygiene', label: 'Home & Hygiene',      href: '/c/hygiene' },
  { key: 'food',    label: 'Food & Drinks',       href: '/c/food' },
];

const SORTS = [
  { value: 'featured',   label: 'Featured' },
  { value: 'newest',     label: 'Newest' },
  { value: 'price-asc',  label: 'Price · Low to high' },
  { value: 'price-desc', label: 'Price · High to low' },
  { value: 'rating',     label: 'Rating' },
];

type Props = {
  activeSlug: string;
  title: string;
  blurb: string;
  products: ProductSummary[];
  crumbCategory?: string;
};

/**
 * Client-side filter/sort/search over a pre-rendered product list.
 * Reads ?sale and ?sort from window.location after hydration so the page
 * remains fully static-exportable.
 */
export default function ShopBrowser({ activeSlug, title, blurb, products, crumbCategory }: Props) {
  const [saleOnly, setSaleOnly] = useState(false);
  const [sort, setSort] = useState<string>('featured');
  const [query, setQuery] = useState('');

  // Hydrate filters from URL query string.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSaleOnly(params.get('sale') === '1');
    setSort(params.get('sort') ?? 'featured');
    setQuery(params.get('q') ?? '');
  }, []);

  const visible = useMemo(() => {
    let rows = products.slice();
    if (saleOnly) rows = rows.filter(p => p.oldPrice != null);
    if (query) {
      const q = query.toLowerCase();
      rows = rows.filter(p =>
        (p.title + ' ' + (p.subtitle ?? '') + ' ' + p.subcat + ' ' + (p.origin ?? ''))
          .toLowerCase().includes(q));
    }
    switch (sort) {
      case 'newest':     rows.sort((a, b) => b.id.localeCompare(a.id)); break;
      case 'price-asc':  rows.sort((a, b) => a.price - b.price); break;
      case 'price-desc': rows.sort((a, b) => b.price - a.price); break;
      case 'rating':     rows.sort((a, b) => b.rating - a.rating); break;
      default:           rows.sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    return rows;
  }, [products, saleOnly, sort, query]);

  function updateUrl(name: string, value: string | null) {
    const sp = new URLSearchParams(window.location.search);
    if (value === null || value === '') sp.delete(name);
    else sp.set(name, value);
    const qs = sp.toString();
    const url = window.location.pathname + (qs ? '?' + qs : '');
    window.history.replaceState(null, '', url);
  }

  return (
    <>
      <header className="text-center px-5 sm:px-12 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="text-[11px] tracking-widest uppercase text-muted font-semibold mb-4">
          <Link href="/" className="hover:text-green-dark">Home</Link>{' '}
          <span className="opacity-50">/</span>{' '}
          {crumbCategory
            ? <><Link href="/c" className="hover:text-green-dark">Shop</Link> <span className="opacity-50">/</span> {crumbCategory}</>
            : <>Shop</>}
        </nav>
        <h1 className="text-3xl sm:text-5xl font-bold mb-3">{title}</h1>
        <p className="text-muted max-w-[58ch] mx-auto">{blurb}</p>
      </header>

      <section className="max-w-[1360px] mx-auto px-5 sm:px-12 pb-20 grid sm:grid-cols-[260px_1fr] gap-6 sm:gap-10 items-start">
        <aside className="card p-5 sticky top-24 self-start">
          <h6 className="text-[10px] tracking-widest uppercase text-ink font-bold pb-3 mb-3 border-b border-rule">Categories</h6>
          <div className="flex flex-col">
            {CATS.map(c => (
              <Link
                key={c.key}
                href={c.href as any}
                className={
                  'flex justify-between px-3 py-2 rounded-sm text-[13px] font-medium transition-colors ' +
                  (activeSlug === c.key
                    ? 'bg-green-pale text-green-dark font-bold'
                    : 'text-ink-2 hover:bg-green-pale hover:text-green-dark')
                }
              >
                {c.label}
              </Link>
            ))}
          </div>

          <h6 className="text-[10px] tracking-widest uppercase text-ink font-bold pb-3 mb-3 mt-6 border-b border-rule">Filters</h6>
          <label className="flex items-center gap-2 text-[13px] text-ink-2 py-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={saleOnly}
              onChange={e => { setSaleOnly(e.target.checked); updateUrl('sale', e.target.checked ? '1' : null); }}
              className="accent-green"
            />
            On sale only
          </label>

          <h6 className="text-[10px] tracking-widest uppercase text-ink font-bold pb-3 mb-3 mt-6 border-b border-rule">Search</h6>
          <input
            type="search"
            value={query}
            placeholder="Search the catalogue…"
            onChange={e => { setQuery(e.target.value); updateUrl('q', e.target.value || null); }}
            className="w-full px-3 py-2 border border-rule rounded-full text-[13px] bg-surface focus:bg-paper focus:border-green outline-none"
            aria-label="Search products"
          />

          <h6 className="text-[10px] tracking-widest uppercase text-ink font-bold pb-3 mb-3 mt-6 border-b border-rule">Delivery</h6>
          <p className="text-[12px] text-muted leading-relaxed">Free shipping on orders over $50. Carbon-neutral courier.</p>
        </aside>

        <div>
          <header className="flex justify-between items-center gap-4 flex-wrap mb-5">
            <span className="text-[13px] text-muted font-medium">{visible.length} item{visible.length === 1 ? '' : 's'}</span>
            <label className="inline-flex items-center gap-2.5 text-[12px] text-muted font-medium">
              Sort by
              <select
                value={sort}
                onChange={e => { setSort(e.target.value); updateUrl('sort', e.target.value === 'featured' ? null : e.target.value); }}
                className="bg-paper border border-rule rounded-full pl-3.5 pr-7 py-1.5 text-[13px] text-ink"
              >
                {SORTS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </label>
          </header>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {visible.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          {visible.length === 0 && <p className="text-center text-muted py-16 italic">No products match your filters.</p>}
        </div>
      </section>
    </>
  );
}
