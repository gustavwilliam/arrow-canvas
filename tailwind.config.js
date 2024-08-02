/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      translate: {
        "connector-corner": "11%",
      },
    },
  },
  plugins: [],
};
