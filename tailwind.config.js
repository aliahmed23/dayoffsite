/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'do-black': '#111111',
        'do-gray': '#777777',
        'do-off-white': '#F7F6F2',
        'do-blue': '#0057FF',
        'do-yellow': '#FFC400',
        'do-red': '#FF3B1F',
        'do-green': '#00A82D',
        'do-peach': '#FFD8C2',
        'do-pink': '#FF6BAA',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        helvetica: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
