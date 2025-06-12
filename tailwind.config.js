/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryLight1: "#00C4F3",
        primaryLight2: "#B9E9FA",
        primaryLight3: "#56BDEE",
        buttonBg: "#34B0EA",
        yellowBase: "#FCEC52",
        whiteColor: "#fff",
        lightBlack: "#323e48",
      },
    },
  },
  plugins: [],
};
