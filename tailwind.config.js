/** @type {import('tailwindcss').Config} */
module.exports = {

    plugins: [
    require('tailwindcss-animated')
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/public/hero.jpg')",
        "about-bg": "url('/public/abt.jpg')",
      },
      colors: {
        "gray-blue": "#2C4E80",
        "green-blue": "#153448"
      },
    },
  },
  plugins: [],
};
