/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sms: { max: "640px" },
      mds: { max: "768px" },
      lgs: { max: "1024px" },
      xls: { max: "1280px" },
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
