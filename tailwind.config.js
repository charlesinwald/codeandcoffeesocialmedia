/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "gray-light": "#4c5362",
    },
    extend: {
      backgroundImage: {
        bg: "url('../public/waves.svg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
