/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        accentColor: "#A4238C",
        textColor: "#3F3F3F",
        borderColor: "#C7C7C7",
      },
    },
  },
  plugins: [],
};
