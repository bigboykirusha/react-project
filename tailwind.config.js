/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xl: "1440px",
      md: "1024px",
      sm: "480px",
    },
    extend: {
      colors: {
        "almost-white": "hsl(0, 0%, 98%)",
        "almost-black": "hsl(0, 0%, 8%)",
        "medium-gray": "hsl(0, 0%, 41%)",
      },
    },
  },
  plugins: [],
};
