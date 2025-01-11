/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#ff6b00', // Adjust the shade as needed
          600: '#e65a00', // Darker shade for hover
        }
      }
    },
  },
  plugins: [],
}

