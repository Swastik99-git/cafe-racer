/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'off-white': '#e8e6e3',
        'charcoal': '#0a0a0a',
        'charcoal-light': '#141414',
        'accent': '#cc4400',
        'accent-light': '#e85510',
        'accent-dark': '#993300',
        'metallic': '#8a8a88',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.3em',
      },
    },
  },
  plugins: [],
};
