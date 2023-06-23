/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "640px" }, // Small screens up to 640px
      md: {max :"768px", // Medium screens (default: 768px)
      // ... other breakpoints
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
