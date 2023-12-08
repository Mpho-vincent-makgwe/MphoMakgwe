/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Configure your color palette here
        "custom-color-mixed": {
          10: "e8ffd4",
          20: "#d2dbd1",
        },
        "custom-blue": {
          10: "#c5a8ca",
          15: "#8ca8ca",
          20: "#4888b1",
        },
        "blue-black": {
          10: "#000019",
          15: "#3e535f",
        },
      },
      fontFamily: {
        alkatra: ["Alkatra", "sans"],
        dm_mono: ["DM Mono", "italic"],
        eduNswActFoundation: ["Edu NSW ACT Foundation", "sans"],
        deliciouse: ["Delicious Handrawn", "sans"],
        fastHand: ["Fasthand", "sans"],
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--custom-color-mixed-10': theme('colors.custom-color-mixed.10'),
          '--custom-color-mixed-20': theme('colors.custom-color-mixed.20'),
          '--custom-blue-10': theme('colors.custom-blue.10'),
          '--custom-blue-15': theme('colors.custom-blue.15'),
          '--custom-blue-20': theme('colors.custom-blue.20'),
          '--blue-black-10': theme('colors.blue-black.10'),
          '--blue-black-15': theme('colors.blue-black.15'),
        },
      });
    },
  ],
};
