/** @type {import('next').NextConfig} */

// Static export targets GitHub Pages at /UOLV2/.
// Set NEXT_OUTPUT=server (or remove) for a database-backed server build.
const isStatic = process.env.NEXT_OUTPUT !== 'server';

const nextConfig = {
  reactStrictMode: true,
  ...(isStatic && {
    output: 'export',
    basePath: '/UOLV2',
    assetPrefix: '/UOLV2/',
    trailingSlash: true,
  }),
  images: {
    // GitHub Pages can't run the next/image optimiser → serve sources directly.
    unoptimized: isStatic,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.greenkart.demo' },
    ],
  },
};

export default nextConfig;
