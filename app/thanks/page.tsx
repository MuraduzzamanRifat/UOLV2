import ThanksView from '@/components/ThanksView';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Thank you', robots: { index: false, follow: false } };

export default function ThanksPage() {
  return <ThanksView />;
}
