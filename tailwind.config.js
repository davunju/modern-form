/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        inter: '"Inter", sans-serif',
      },
      screens: {
        mobile: { max: "900px" },
      },
    },
  },
  plugins: [],
};
