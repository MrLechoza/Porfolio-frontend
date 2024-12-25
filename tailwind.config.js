/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./frontend/index.html"],
  theme: {
    extend: {
      screens: {
        xs: "350px",
      },
      fontFamily: {
        russo: ['"Russo One"', "sans-serif"],
      },
      colors: {},
    },
  },
  plugins: [],
};
