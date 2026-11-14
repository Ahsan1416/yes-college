import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0a1d37',
          'navy-light': '#122c4f',
          gold: '#f59e0b',
          'gold-light': '#fbbf24',
          'gold-dark': '#d97706',
          blue: '#1d4ed8',
          'blue-light': '#2563eb',
          slate: '#0f172a',
          surface: '#f8fafc',
          subtle: '#e2e8f0',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(10, 29, 55, 0.08)',
        card: '0 10px 30px -4px rgba(10, 29, 55, 0.1)',
        highlight: '0 0 25px rgba(245, 158, 11, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;

