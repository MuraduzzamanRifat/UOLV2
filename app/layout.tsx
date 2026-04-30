import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';
import './globals.css';

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'GreenKart Bazar — Organic Food, Wellness & Natural Care',
    template: '%s · GreenKart Bazar',
  },
  description:
    'Certified-organic food, herbal supplements, and clean personal care from trusted producers — delivered across Bangladesh. Cash on delivery, free delivery in Dhaka over ৳ 1,500.',
  openGraph: {
    type: 'website',
    siteName: 'GreenKart Bazar',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Hind+Siliguri:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
