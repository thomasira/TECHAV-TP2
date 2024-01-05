
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        light: '#d4c9cd',
        dark: '#0d0408'
      },
      fontFamily: {
        archivo:['Archivo, sans-serif']
      }
    },
  },
  plugins: [],
}

