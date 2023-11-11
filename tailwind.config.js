/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nanumDahaeng: ["nanumDahaeng"],
        nanumSungsil: ["nanumSungsil"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
