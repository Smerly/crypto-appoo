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
        secondary: '#1F2128',
        lighterGray: '#2C2F36'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '4rem'
      }
    },
  },
  plugins: [],
}

