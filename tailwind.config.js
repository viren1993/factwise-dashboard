/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        serif: ["'DM Serif Display'", "serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#1a1814",
          soft: "#3d3a34",
          muted: "#7a766e",
        },
        cream: "#f7f4ef",
        paper: "#fdfcfa",
        rule: "#e4dfd8",
        accent: {
          DEFAULT: "#c05c2e",
          light: "#f0e6df",
        },
        dept: {
          eng: { DEFAULT: "#2563a8", light: "#ddeaf8" },
          mkt: { DEFAULT: "#7c3aaa", light: "#eddff8" },
          sales: { DEFAULT: "#c05c2e", light: "#f0e6df" },
          hr: { DEFAULT: "#1a8a5a", light: "#d6f0e6" },
          fin: { DEFAULT: "#b5860a", light: "#fdf0d0" },
        },
      },
    },
  },
  plugins: [],
};
