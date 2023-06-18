/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#1169e9',
      },
    },
    fontFamily: {
      'mulish': ['Mulish'],
      'outfit': ['Outfit']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
  ],
}
