/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  mode: 'jit',
  theme: {
    screens: {
      md: { max: '700px' },
    },
    colors: {
      white: colors.white,
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/hero.png')",
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
