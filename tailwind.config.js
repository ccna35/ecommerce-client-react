/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#232a37",
        secColor: "#bcbcbd",
        bgColor: "#f6f6f6",
        chestnutRose: "#ca435c",
      },
    },
  },
  plugins: [],
};
