import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          500: '#FBBF24',
          600: '#D4AF37',
          900: '#B5952F', // Deep corporate gold
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          900: '#111827',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      // --- ADD THIS ANIMATION SECTION ---
      animation: {
        'slow-zoom': 'zoom 20s ease-in-out infinite alternate',
        'ken-burns': 'kenBurns 25s ease-out infinite alternate',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      },
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' }, // Gentle 15% zoom
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.1) translate(-2%, -2%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      // ----------------------------------
    },
  },
  plugins: [],
};
export default config;