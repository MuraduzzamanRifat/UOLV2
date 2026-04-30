'use client';
import { useCart } from '@/lib/cart-store';

type Props = {
  id: string;
  qty?: number;
  className?: string;
  label?: string;
  variant?: 'pill' | 'block' | 'ghorer';
};

export default function AddToBag({ id, qty = 1, className = '', label, variant = 'pill' }: Props) {
  const add = useCart(s => s.add);
  const setOpen = useCart(s => s.setOpen);

  let cls: string;
  let inner: React.ReactNode;

  if (variant === 'block') {
    cls = 'btn btn-green w-full ' + className;
    inner = label ?? 'Add to bag';
  } else if (variant === 'ghorer') {
    cls = 'inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-sale text-white text-[11px] font-bold tracking-wider uppercase hover:bg-sale-dark active:scale-95 transition-all cursor-pointer ' + className;
    inner = (
      <>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
          <path d="M3 6h2l2.5 12h11l2-9H6.5"/>
          <circle cx="9" cy="20" r="1.4"/>
          <circle cx="17" cy="20" r="1.4"/>
        </svg>
        <span>{label ?? 'Add'}</span>
      </>
    );
  } else {
    cls = 'px-4 py-2 rounded-full bg-green-pale text-green-dark text-[11px] font-bold tracking-wider uppercase hover:bg-green hover:text-white transition-colors cursor-pointer ' + className;
    inner = label ?? 'Add';
  }

  return (
    <button
      type="button"
      className={cls}
      onClick={(e) => { e.preventDefault(); add(id, qty); setOpen(true); }}
    >
      {inner}
    </button>
  );
}
