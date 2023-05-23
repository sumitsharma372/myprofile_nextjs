/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        code: ['Source Code Pro', 'monospace'],
        kanit: ['Kanit', 'sans-serif']
      },
      colors: {
        primary: '#121212',
        secondary: '#1F1F1F',
      }
    },
  },
  plugins: [],
}
