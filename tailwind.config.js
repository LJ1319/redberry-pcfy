/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica-neue': ['HelveticaNeue']
      }
    },
  },
  plugins: [
    require('tailwindcss-opentype'),
  ],
};
