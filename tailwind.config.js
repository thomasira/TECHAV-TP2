
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
      },
      fontSize: {
        xs: 'clamp(12px, 1.5vw, 16px)',
        text: 'clamp(16px, 1.75vw, 22px)',
        s: 'clamp(20px, 3vw, 28px)',
        m: 'clamp(24px, 3.75vw, 32px)',
        l: 'clamp(32px, 5vw, 48px)',
        xl: 'clamp(42px, 7vw, 60px)',
        huge: 'clamp(60px, 9.25vw, 96px)',
      }
    },
  },
  plugins: [],
}
