const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xst: "300px",
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
