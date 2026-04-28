import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f5eedd',
        sage: '#85926d',
        olive: '#767344',
        forest: '#303625',
        stone: '#d4d4d4',
        sand: 'hsl(38, 30%, 88%)',
        bloom: '#c4708a',
        ink: '#1a1a1a',
        background: '#f5eedd',
        foreground: '#303625',
        primary: '#303625',
        muted: 'rgba(48, 54, 37, 0.55)',
      },
      fontFamily: {
        display: ['Garet', 'Outfit', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        mono: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        sharp: '4px',
        card: '8px',
      },
      boxShadow: {
        elevated: '0 4px 10px rgba(48, 54, 37, 0.1)',
        'elevated-lg': '0 12px 32px rgba(48, 54, 37, 0.14)',
        'elevated-dark': '0 8px 24px rgba(0, 0, 0, 0.4)',
      },
      maxWidth: {
        'site': '1280px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config
