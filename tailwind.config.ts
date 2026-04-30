import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Saturated leaf green — ghorerbazar / Pran retail energy */
        green: {
          DEFAULT: '#3a8a2e',
          dark:    '#256a1d',
          soft:    '#7cc55c',
          pale:    '#e6f3df',
          bg:      '#f1f8ed',
        },
        /* Red CTA — discount discs, ADD buttons, hot deals */
        sale: {
          DEFAULT: '#d62828',
          dark:    '#a81e1e',
          soft:    '#fde8e8',
        },
        accent: {
          DEFAULT: '#f4a300', // warm yellow promo
          dark:    '#c97f00',
        },
        ink:    { DEFAULT: '#1f2a24', 2: '#3a4640' },
        muted:  { DEFAULT: '#6b7380', 2: '#9aa1ad' },
        rule:   { DEFAULT: '#e5e8ec', soft: '#eef1f4' },
        paper:  '#ffffff',
        surface:'#f6f7f4',
        ochre:  '#fab82f',
        rose:   '#b75b89',
        sky:    '#2886b5',
        danger: '#d62828',
      },
      fontFamily: {
        sans: ['Poppins', '"Hind Siliguri"', 'system-ui', '-apple-system', 'sans-serif'],
        bn:   ['"Hind Siliguri"', '"Noto Sans Bengali"', 'sans-serif'],
      },
      borderRadius: {
        'sm': '10px',
        DEFAULT: '14px',
        'md': '18px',
        'lg': '24px',
        'xl': '28px',
      },
      boxShadow: {
        card: '0 6px 18px rgba(43, 49, 64, .05)',
        cardHover: '0 14px 32px rgba(43, 49, 64, .1)',
        pop: '0 18px 40px rgba(79, 133, 40, .24)',
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(.2,.7,.3,1)',
      },
      keyframes: {
        floatLeaf: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        floatLeaf: 'floatLeaf 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
