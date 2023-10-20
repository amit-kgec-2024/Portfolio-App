/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: "#EC2D9E",
      },
      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

