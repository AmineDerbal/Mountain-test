/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  mode: 'jit',
  theme: {
    screens: {
      md: { max: '700px' },
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/hero.png')",
        history: "url('/src/assets/peak.png')",
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        bebasNeue: ['Bebas Neue', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      colors: {
        white: colors.white,
        primary: '#414f6b',
        secondary: '#4d4d4d',
        tertiary: '#707f9a',
      },
    },
  },
  plugins: [],
};
