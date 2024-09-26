/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: { // Use fontFamily here
        gilroy: ['Gilroy', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

