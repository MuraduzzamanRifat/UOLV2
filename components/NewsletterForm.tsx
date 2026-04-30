'use client';

export default function NewsletterForm() {
  return (
    <form
      className="flex gap-2 w-full sm:w-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="your@email.com"
        aria-label="Email"
        className="flex-1 sm:w-72 px-4 py-2.5 rounded-full bg-paper text-ink text-[13.5px] outline-none focus:ring-2 ring-accent"
      />
      <button type="submit" className="btn btn-sale whitespace-nowrap cursor-pointer">
        Subscribe
      </button>
    </form>
  );
}
