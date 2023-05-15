/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDarkBlue: "#1F3866",
        primaryLightBlue: "#B1C4D4",
        primaryBrown: "#877465",
        primaryBlue: "#0944B1",
        secondaryDarkGreen: "#2F3629",
        secondaryLightGreen: "#929D82",
        secondaryBrown: "#352830",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        poppins: ["Poppins, sans-serif"],
      },
    },
  },
  plugins: [],
}
