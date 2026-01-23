/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // This allows next-themes to toggle the 'dark' class
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};