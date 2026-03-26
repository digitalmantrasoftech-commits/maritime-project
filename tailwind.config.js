/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#044991",
          50: "#f0f4f9",
          100: "#e1e9f3",
          200: "#c2d2e7",
          300: "#a4bcda",
          400: "#85a5ce",
          500: "#044991",
          600: "#033a74",
          700: "#022b57",
          800: "#021d3a",
          900: "#010e1d",
        }
      }
    },
  },
  plugins: [],
};
