/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main_body_bg: '#424255',
        main_color: '#DDDEE0',
        text_color: '#767684'
      }
    },
  },
  plugins: [],
}