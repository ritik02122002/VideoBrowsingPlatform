/** @type {import('tailwindcss').Config} */
import  theme from 'tailwindcss/defaultTheme'
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    screens: {
      'xs': '400px',
      ...theme.screens,
    },
  },
  plugins: [],
}

