/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-grey': '#CFCFCF',
        'slate-grey': "#F5F5F5",
        'charcoal': '#2E2E2E'
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sfPro: ["SF Pro Display", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}