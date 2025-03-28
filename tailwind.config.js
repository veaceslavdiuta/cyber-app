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
        'charcoal': '#2E2E2E',
        blackTitanium: "#1C1C1E", // Dark metallic black  
        whiteTitanium: "#F4F4F4", // Soft white titanium  
        naturalTitanium: "#D4CFC8", // Warm gray titanium  
        desertTitanium: "#B09A83", // Sandy titanium  
        black: "#000000",
        blue: "#007AFF",
        green: "#34C759",
        yellow: "#FFCC00",
        pink: "#FF2D55",
        blueTitanium: "#5A7F96", // Deep metallic blue  
        spaceBlack: "#0B0B0D",
        silver: "#C0C0C0",
        gold: "#FFD700",
        deepPurple: "#4B0082",
        midnight: "#121212",
        starlight: "#EFE7DA",
        purple: "#A020F0",
        red: "#FF3B30",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sfPro: ["SF Pro Display", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        figTree: ["Figtree", 'sans-serif'],
      },
      backgroundColor: {
        'linear': 'linear-gradient(91deg, #211C24 0.64%, #211C24 101%)'
      }
    },
  },
  plugins: [],
}