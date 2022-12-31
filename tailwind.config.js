/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ems-red": {
          50: "#fef2f3",
          100: "#fee2e5",
          200: "#fecacf",
          300: "#fca5ae",
          400: "#f7727f",
          500: "#ee4556",
          600: "#db2739",
          700: "#c01e2e",
          800: "#981c28",
          900: "#7f1d27",
        },
        "ems-green": {
          50: "#ecfff5",
          100: "#d2ffeb",
          200: "#a8ffd8",
          300: "#65ffbb",
          400: "#1bff97",
          500: "#00f977",
          600: "#00d05f",
          700: "#00a24d",
          800: "#007e42",
          900: "#006739",
        },
      },
      fontFamily: {
        rubik: ["Rubik 80s Fade"],
        AstroSpace: ["AstroSpace"],
      },
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
