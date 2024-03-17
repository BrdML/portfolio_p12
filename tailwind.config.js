/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          // Couleurs du mode sombre
          secondary: "#C4552F",
          darkbg: "#2D4263",
          background: "#191919",
          text: "#ECDBBA",
        },
      },
    },
  },
  plugins: [],
};
