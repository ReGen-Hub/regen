/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'Regen-lightBlue': '#00416A',
      },
      backgroundImage: (theme) => ({
        "regen-primary-gradient": "linear-gradient(356deg, rgba(228,240,230,1) 0%, rgba(179,230,189,1) 43.75%, rgba(232,247,241,1) 100%)",
    }),
    },
  },
  plugins: [],
}
