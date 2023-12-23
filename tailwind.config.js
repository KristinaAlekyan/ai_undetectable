/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'bgColor': '#3B457B',
    },
    extend: {
      filter: {
        "list-dot": "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));"
      }
    },
  },
  plugins: [],
}