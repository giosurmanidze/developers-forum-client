/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#313146',
        primary: '#DDDEE0',
        primary_high: '#a9aab2'
      }
    },
  },
  plugins: [],
}