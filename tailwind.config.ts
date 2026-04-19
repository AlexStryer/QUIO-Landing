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
        black: '#1a1a1a',
        stone: '#d4d4d4',
        sand: 'hsl(38, 30%, 88%)',
        background: '#f5eedd',
        foreground: '#303625',
        primary: '#85926d',
        muted: 'rgba(48, 54, 37, 0.55)',
      },
      fontFamily: {
        display: ['Garet', 'sans-serif'],
        body: ['Garet', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
