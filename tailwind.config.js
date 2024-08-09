/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,vue}",
    "./components/**/*.{js,jsx,vue}",
    "./app/**/*.{js,jsx,vue}",
    "./src/**/*.{js,jsx,vue}",
  ],
  prefix: "",
  theme: {
    extend: {
      translate: {
        "connector-arrows": "11%",
        "connector-lemoji": "25%",
        "connector-pinia": "25%",
      },
    },
  },
  safelist: [
    {
      pattern: /-?translate-(x|y)-connector-.+/,
    },
  ],
};
