import { listProducts } from '@/lib/catalog';
import ShopBrowser from '@/components/ShopBrowser';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Shop everything' };

export default function ShopAllPage() {
  // Render ALL products at build time. Filters / sort / search apply client-side.
  const { items } = listProducts();
  return (
    <ShopBrowser
      activeSlug="all"
      title="The catalogue."
      blurb="Organic food, wellness, beauty and hygiene from small producers."
      products={items}
    />
  );
}
