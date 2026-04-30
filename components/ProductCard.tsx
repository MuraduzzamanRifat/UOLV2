import Image from 'next/image';
import Link from 'next/link';
import { fmtMoney, discountPct } from '@/lib/format';
import type { ProductSummary } from '@/types';
import AddToBag from './AddToBag';

export default function ProductCard({ product }: { product: ProductSummary }) {
  const off = discountPct(product.price, product.oldPrice);
  return (
    <article className="group relative bg-paper border border-rule rounded-md overflow-hidden flex flex-col hover:border-green hover:shadow-md transition-all duration-200">
      <Link href={`/p/${product.slug}`} className="relative block aspect-square bg-surface overflow-hidden cursor-pointer">
        {product.oldPrice && off > 0 && (
          <span className="disc" aria-label={`${off}% off`}>
            <strong>{off}%</strong>
            <small>OFF</small>
          </span>
        )}
        {!product.oldPrice && product.featured && (
          <span className="absolute top-3 left-3 z-10 px-2 py-1 rounded bg-green text-white text-[10px] font-bold tracking-wider uppercase">
            Bestseller
          </span>
        )}
        <Image
          src={product.image}
          alt={product.title}
          fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 ease group-hover:scale-105"
        />
      </Link>

      <div className="p-3 sm:p-4 flex flex-col gap-1 flex-1">
        <span className="text-[10.5px] tracking-wider uppercase text-muted font-semibold">
          {product.subcat} · {product.weight}
        </span>

        <h3 className="text-[14px] font-semibold text-ink leading-snug min-h-[40px]">
          <Link href={`/p/${product.slug}`} className="hover:text-green-dark line-clamp-2">
            {product.title}
          </Link>
        </h3>

        <p className="bn text-[12.5px] text-ink-2 leading-snug -mt-0.5 line-clamp-1">
          {product.titleBn}
        </p>

        <div className="mt-auto pt-2.5 flex items-center justify-between gap-2">
          <span className="flex items-baseline gap-1.5">
            <span className="text-[16px] font-extrabold text-sale leading-none">
              {fmtMoney(product.price)}
            </span>
            {product.oldPrice && (
              <s className="text-[12px] text-muted font-medium leading-none">
                {fmtMoney(product.oldPrice)}
              </s>
            )}
          </span>
          <AddToBag id={product.id} variant="ghorer" />
        </div>
      </div>
    </article>
  );
}
