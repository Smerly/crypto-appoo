const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#191B1F',
        secondary: 'rgba(31,31,40,1)',
        secondaryTransparent: 'rgba(31,31,40,0.8)',
        lighterGray: '#2C2F36',
        dividerGray: 'rgba(40,40,40, 0.3)'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '4rem'
      }
    },
  },
  plugins: [],
}

