/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.625rem'
      },
      fontWeight : { 
        'mediumlight' : '270'
      },
    },
  },
  plugins: [],
}

