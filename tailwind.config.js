/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      tanha: ["tanha"],
      vazir: ["vazir"],
    },
    extend: {
      container: true,
      colors: {
        primary: "#4362c1",
        secondery: "#444444",
      },
    },
  },
  plugins: [],
};
