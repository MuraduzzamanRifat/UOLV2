/**
 * In-memory query layer that mirrors lib/queries.ts (Prisma) but
 * reads from the static catalogue. Used by the GitHub Pages build.
 */
import { CATEGORIES, PRODUCTS, toSummary } from '@/data/catalog';
import type { CategoryRef, ProductDetail, ProductSummary, SortKey } from '@/types';

export function getCategories(): CategoryRef[] {
  return CATEGORIES;
}

export function categoryCount(slug: string): number {
  return PRODUCTS.filter(p => p.category.slug === slug).length;
}

export type ListFilters = {
  cat?: string;
  q?: string;
  sale?: boolean;
  sort?: SortKey;
  take?: number;
  skip?: number;
};

export function listProducts(f: ListFilters = {}): { items: ProductSummary[]; total: number } {
  let rows = PRODUCTS.slice();
  if (f.cat)  rows = rows.filter(p => p.category.slug === f.cat);
  if (f.sale) rows = rows.filter(p => p.oldPrice != null);
  if (f.q) {
    const q = f.q.toLowerCase();
    rows = rows.filter(p =>
      (p.title + ' ' + (p.subtitle ?? '') + ' ' + p.subcat + ' ' + (p.origin ?? ''))
        .toLowerCase().includes(q));
  }
  switch (f.sort) {
    case 'newest':     rows.sort((a, b) => b.id.localeCompare(a.id)); break;
    case 'price-asc':  rows.sort((a, b) => a.price - b.price); break;
    case 'price-desc': rows.sort((a, b) => b.price - a.price); break;
    case 'rating':     rows.sort((a, b) => b.rating - a.rating); break;
    default:           rows.sort((a, b) => Number(b.featured) - Number(a.featured));
  }
  const total = rows.length;
  const skip = f.skip ?? 0;
  const take = f.take ?? 60;
  return { items: rows.slice(skip, skip + take).map(toSummary), total };
}

export function getProduct(slug: string): ProductDetail | null {
  return PRODUCTS.find(p => p.slug === slug) ?? null;
}

export function getRelated(productId: string, categorySlug: string, limit = 4): ProductSummary[] {
  return PRODUCTS
    .filter(p => p.category.slug === categorySlug && p.id !== productId)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit)
    .map(toSummary);
}

export function getProductsByIds(ids: string[]): ProductSummary[] {
  if (!ids.length) return [];
  const set = new Set(ids);
  return PRODUCTS.filter(p => set.has(p.id)).map(toSummary);
}

export const ALL_SLUGS = PRODUCTS.map(p => p.slug);
export const ALL_CATEGORY_SLUGS = CATEGORIES.map(c => c.slug);
