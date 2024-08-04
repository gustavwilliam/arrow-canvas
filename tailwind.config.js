/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      translate: {
        "connector-arrows": "11%",
        "connector-lemoji": "25%",
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
