import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        headertext: '#179CD7',
        footerbg: '#9DD5EC',
      },
      fontFamily: {
        unbounded: ['Unbounded', 'sans-serif'],
        velasans: ['Vela Sans', 'sans-serif'],
        ttruns: ['TT Runs', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
