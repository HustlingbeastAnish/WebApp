/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      ss: { max: "640px" },
      ms: { max: "768px" },
      ls: { max: "1024px" },
      xls: { max: "1280px" },
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
