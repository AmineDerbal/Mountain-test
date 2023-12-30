/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/hero.png')",
      },
    },
  },
  plugins: [],
};
