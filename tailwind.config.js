/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "dark-grayish-blue": "#68707d",
        "grayish-blue": "#b6bcc8",
        orange: "#ff7d1a",
        "very-dark-blue": "#1d2025",
        "page-orange": "#ffede0",
        "light-grayish-blue": "#f7f8fd",
      },
    },
  },
  plugins: [],
};
