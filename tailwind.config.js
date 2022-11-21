/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'xs': '400px',
      'xs5': '500px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
};
