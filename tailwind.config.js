/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: "#EC2D9E",
        dark1: "#0c1317",
        dark2: "#0a1014",
        dark3: "#233138",
        dark4: "#20272b",
        dark5: "#3e474d",
        dark6: "#111b21",
        whitmix1: "#0b846d",
        whitmix2: "#144d37",
        linknumber: "#007bfc",
      },
      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

