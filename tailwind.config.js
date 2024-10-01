/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      spacing: {
        500: "32rem",
        700: "50rem",
        75: "18.75rem",
        25: "6.25rem",
        50: "12.5rem",
        1: "0.063rem",
        5.5: "1.406rem",
        18: "4.25rem",
        22: "5.375rem",
        2300: "143.75rem",
        1500: "93.75rem",
        1000: "62.5rem",
        1300: "81.25rem",
        400: "25rem",
        90: "5.625rem",
        73: "4.563rem",
        570: "35.625rem",
        520: "32.5rem",
        180: "11.25rem",
        10: "0.625rem",
        150: "9.375rem",
        410: "25.625rem",
        136: "8.5rem",
      },
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        main: "#273896",
      },
    },
  },
  plugins: [],
};
