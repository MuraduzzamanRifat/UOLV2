'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Slide = {
  eyebrow: string;
  eyebrowBn: string;
  title: string;
  titleBn: string;
  body: string;
  cta: { href: string; label: string };
  image: string;
  bg: string;       // tailwind bg class
  accent: string;   // tailwind text class for percentage / accent
};

const SLIDES: Slide[] = [
  {
    eyebrow: 'Mid-week deal · Today only',
    eyebrowBn: 'আজকের অফার',
    title: 'Raw Honey & Pure Ghee — up to 25% off',
    titleBn: 'খাঁটি মধু ও ঘি, ছাড় ২৫% পর্যন্ত',
    body: 'Direct from Sundarbans apiaries and Sirajganj dairies.',
    cta: { href: '/c/food', label: 'Shop pantry' },
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1400&q=85&auto=format&fit=crop',
    bg: 'from-green-pale via-paper to-green-pale',
    accent: 'text-sale',
  },
  {
    eyebrow: 'New arrivals',
    eyebrowBn: 'নতুন সংগ্রহ',
    title: 'Single-orchard nuts, single-estate oils',
    titleBn: 'একক বাগানের বাদাম, একক এস্টেটের তেল',
    body: 'Provenance you can trace. Pricing you can read.',
    cta: { href: '/c', label: 'Browse all' },
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1400&q=85&auto=format&fit=crop',
    bg: 'from-sale-soft via-paper to-sale-soft',
    accent: 'text-green-dark',
  },
  {
    eyebrow: 'Free delivery',
    eyebrowBn: 'ফ্রি ডেলিভারি',
    title: 'Free delivery in Dhaka over ৳ 1,500',
    titleBn: 'ঢাকার ভেতরে ১৫০০৳-এর উপরে ফ্রি ডেলিভারি',
    body: 'Same-day delivery within 8 km. Cash on delivery available.',
    cta: { href: '/c?sale=1', label: 'See offers' },
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1400&q=85&auto=format&fit=crop',
    bg: 'from-accent/15 via-paper to-accent/15',
    accent: 'text-sale',
  },
];

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI(n => (n + 1) % SLIDES.length), 5500);
    return () => clearInterval(id);
  }, []);

  const s = SLIDES[i];

  return (
    <section className="relative">
      <div className={`relative bg-gradient-to-r ${s.bg} transition-colors duration-700`}>
        <div className="max-w-[1360px] mx-auto px-5 sm:px-12 py-8 sm:py-12 grid sm:grid-cols-[1.15fr_1fr] gap-8 items-center min-h-[340px] sm:min-h-[400px]">
          <div className="relative z-10">
            <p className={`eyebrow ${s.accent} mb-2`}>
              {s.eyebrow} <span className="bn opacity-70">· {s.eyebrowBn}</span>
            </p>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-ink leading-tight tracking-tight mb-2">
              {s.title}
            </h1>
            <p className="bn text-[15px] sm:text-[17px] text-ink-2 mb-3 font-medium leading-snug">
              {s.titleBn}
            </p>
            <p className="text-[14px] text-ink-2 max-w-[52ch] mb-5 leading-relaxed">
              {s.body}
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href={s.cta.href} className="btn btn-sale">
                {s.cta.label} →
              </Link>
              <Link href="/c" className="btn btn-outline">All categories</Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-md overflow-hidden shadow-lg max-w-[480px] justify-self-center sm:justify-self-end w-full">
            <Image
              src={s.image}
              alt=""
              fill priority
              sizes="(max-width: 640px) 100vw, 40vw"
              className="object-cover"
              key={s.image}
            />
            <div className="absolute top-4 right-4 bg-sale text-white text-[11px] font-extrabold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-md">
              Today only
            </div>
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute left-1/2 bottom-3 -translate-x-1/2 flex gap-2 z-20">
          {SLIDES.map((_, n) => (
            <button
              key={n}
              type="button"
              onClick={() => setI(n)}
              aria-label={`Slide ${n + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                n === i ? 'w-7 bg-sale' : 'w-2 bg-ink/20 hover:bg-ink/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
