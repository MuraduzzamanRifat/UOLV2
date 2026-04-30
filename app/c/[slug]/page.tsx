import { notFound } from 'next/navigation';
import { CATEGORIES } from '@/data/catalog';
import { listProducts } from '@/lib/catalog';
import ShopBrowser from '@/components/ShopBrowser';
import type { Metadata } from 'next';

type Params = { slug: string };

export function generateMetadata({ params }: { params: Params }): Metadata {
  const cat = CATEGORIES.find(c => c.slug === params.slug);
  if (!cat) return { title: 'Category' };
  return {
    title: cat.name,
    description: `Shop ${cat.name.toLowerCase()} — certified-organic, from small producers.`,
  };
}

export function generateStaticParams() {
  return CATEGORIES.map(c => ({ slug: c.slug }));
}

export const dynamicParams = false;

export default function CategoryPage({ params }: { params: Params }) {
  const cat = CATEGORIES.find(c => c.slug === params.slug);
  if (!cat) notFound();
  const { items } = listProducts({ cat: params.slug });
  return (
    <ShopBrowser
      activeSlug={params.slug}
      title={`${cat.name}.`}
      blurb={`${items.length} item${items.length === 1 ? '' : 's'} in the ${cat.name.toLowerCase()} category. Certified, traceable, delivered.`}
      products={items}
      crumbCategory={cat.name}
    />
  );
}
