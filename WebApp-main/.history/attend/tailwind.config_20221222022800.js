/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"]   content: [
        "./node_modules/flowbite/**/*.js"
    ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
