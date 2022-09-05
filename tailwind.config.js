/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "helvetica-neue": ["HelveticaNeue"]
      },
      colors: {
        "redberryRed": "#E52F2F"
      }
    },
  },
  plugins: [
    require("tailwindcss-opentype"),
  ],
};
