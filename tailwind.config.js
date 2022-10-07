/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/components/screens/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    container: {
      padding: "1rem",
      center: true,
      screens: {
        sm: "780px",
        md: "820px",
        lg: "1080px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    extend: {
      colors: {
        nf: "#E50914",
      },
    },
  },
  plugins: [],
};
