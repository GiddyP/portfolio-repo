/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./public/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      spacing: {
        "big": "48rem"
      },
      colors: {
        'body': '#17171F',
        'selected-text': '#A3A3FF',
        'theme': '#638f6f',
        'nav': '#404053',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#ffffff',
        'green-first': '#6BE47F',
        'green-second': '#122040',
        primary: '#FF6363',
        "mycolor": "#555",
        secondary: {
          50: '#9191A4',
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        poppins: ["'Poppins'", 'sans-serif'],
        pacifico: ['Pacifico', 'cursive']
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}