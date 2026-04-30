'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fmtMoney } from '@/lib/format';

type StoredOrder = {
  number: string;
  email: string;
  totals: { subtotal: number; shipping: number; tax: number; total: number };
  items: Array<{ id: string; title: string; unitPrice: number; qty: number }>;
};

export default function ThanksView() {
  const [order, setOrder] = useState<StoredOrder | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('greenkart.lastOrder');
      if (raw) setOrder(JSON.parse(raw));
    } catch { /* ignore */ }
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return <section className="max-w-[680px] mx-auto px-5 sm:px-12 py-24 text-center text-muted">Loading…</section>;
  }

  if (!order) {
    return (
      <section className="max-w-[680px] mx-auto px-5 sm:px-12 py-24 text-center">
        <p className="eyebrow">No recent order</p>
        <h1 className="text-3xl sm:text-5xl font-bold mb-3.5">Hmm — we don&rsquo;t see a recent order.</h1>
        <p className="text-muted mb-8">Maybe you cleared your browser data, or visited this page directly.</p>
        <Link href="/c" className="btn btn-green inline-flex">Shop the catalogue →</Link>
      </section>
    );
  }

  return (
    <section className="max-w-[680px] mx-auto px-5 sm:px-12 py-16 sm:py-24 text-center">
      <div aria-hidden className="w-[72px] h-[72px] mx-auto mb-6 rounded-full bg-green text-white inline-flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <p className="eyebrow">Order confirmed</p>
      <h1 className="text-3xl sm:text-5xl font-bold mb-3.5">Thank you.<br />Your order is on its way.</h1>
      <p className="text-muted max-w-[52ch] mx-auto mb-8 text-[15.5px]">A confirmation has been sent to your inbox. We&rsquo;ll email again the morning it ships.</p>

      <div className="card p-7 text-left">
        <h3 className="text-[12px] tracking-widest uppercase font-bold pb-3 mb-4 border-b border-rule">Order summary</h3>
        <Row label="Order number" value={order.number} />
        <Row label="Confirmation sent to" value={order.email} />
        <Row label="Subtotal" value={fmtMoney(order.totals.subtotal)} />
        <Row label="Shipping" value={order.totals.shipping === 0 ? 'Free' : fmtMoney(order.totals.shipping)} />
        <Row label="Tax" value={fmtMoney(order.totals.tax)} />
        <Row label="Total" value={fmtMoney(order.totals.total)} bold />
        <hr className="my-4 border-rule-soft" />
        {order.items.map(it => (
          <div key={it.id} className="flex justify-between text-[13.5px] mb-2">
            <span className="text-muted">{it.qty} × {it.title}</span>
            <b className="text-ink font-bold">{fmtMoney(it.unitPrice * it.qty)}</b>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link href="/c" className="btn btn-green inline-flex">Continue shopping →</Link>
      </div>
    </section>
  );
}

function Row({ label, value, bold = false }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex justify-between text-[13.5px] mb-2 ${bold ? 'pt-3 border-t border-rule-soft' : ''}`}>
      <span className="text-muted">{label}</span>
      <b className={`text-ink ${bold ? 'font-extrabold text-[15px]' : 'font-bold'}`}>{value}</b>
    </div>
  );
}
