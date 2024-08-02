/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      translate: {
        "connector-default": "11%",
        "connector-lemoji": "45%",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /-?translate-(x|y)-connector-.+/,
    },
  ],
};
