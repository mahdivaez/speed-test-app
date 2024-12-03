/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          '950': '#0a0b1a',
          '900': '#0f1025',
        },
      },
    },
  },
  plugins: [],
}