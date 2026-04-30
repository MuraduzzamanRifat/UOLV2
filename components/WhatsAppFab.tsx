import Link from 'next/link';

/* Floating WhatsApp + call buttons — bottom-right, sticky, ghorerbazar pattern. */
export default function WhatsAppFab() {
  const PHONE = '+8801700000000';
  const WA_URL = `https://wa.me/${PHONE.replace(/\D/g, '')}?text=${encodeURIComponent('Hi, I have a question about a product on GreenKart Bazar.')}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:bg-[#1ea957] transition-colors cursor-pointer"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91a9.84 9.84 0 0 0-2.91-7.01ZM12.05 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.39c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.41a8.17 8.17 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.25 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06a6.7 6.7 0 0 1-1.99-1.23 7.45 7.45 0 0 1-1.38-1.71c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01a.93.93 0 0 0-.67.31c-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.12.16 1.76 2.69 4.27 3.77.6.26 1.06.41 1.43.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.18-.48-.29Z"/>
        </svg>
        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-md bg-ink text-paper text-[12px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us
        </span>
      </a>

      <a
        href={`tel:${PHONE}`}
        aria-label="Call hotline"
        className="group relative w-14 h-14 rounded-full bg-sale text-white shadow-lg flex items-center justify-center hover:bg-sale-dark transition-colors cursor-pointer"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.9 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.8.2 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/>
        </svg>
        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-md bg-ink text-paper text-[12px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          16XXX hotline
        </span>
      </a>
    </div>
  );
}
