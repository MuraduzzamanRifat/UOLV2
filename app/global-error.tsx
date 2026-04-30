'use client';

/**
 * Catches errors in the root layout itself. Must render its own
 * <html> and <body> because layout.tsx didn't get a chance to.
 * Also fixes a known Next.js 14 static-export issue where the
 * auto-generated /500 fallback page tries to import <Html> from
 * the legacy pages-router runtime and crashes.
 */
export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: '4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Something went wrong.</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>An unexpected error occurred.</p>
        <button
          onClick={reset}
          style={{
            padding: '0.75rem 1.5rem',
            background: '#72b93e',
            color: '#fff',
            border: 0,
            borderRadius: '999px',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: 600,
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
