
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        light: '#dbe2e5',
        dark: '#0d0408',
        main: {
          200: '#5a83e9',
          600: '#324e95',
          800: '#213566',
          900: '#142141'
        },
        neutral: {
          100: '#e4e6ec',
          200: '#d8dae1',
          400: '#989ba2',
          600: '#636467',
          800: '#3e3f41'
        },
        comp: {
          200:'#f8d16d',
          400: '#d2a020',
        }
      },
      fontFamily: {
        archivo:['Archivo, sans-serif']
      },
      fontSize: {
        xs: 'clamp(14px, 1.5vw, 18px)',
        text: 'clamp(16px, 1.75vw, 20px)',
        s: 'clamp(20px, 3vw, 28px)',
        m: 'clamp(24px, 3.75vw, 32px)',
        l: 'clamp(32px, 5vw, 48px)',
        xl: 'clamp(42px, 7vw, 60px)',
        huge: 'clamp(60px, 9.25vw, 96px)',
      },
      boxShadow: {
        sm: '1px 2px 2px 0px rgba(0, 0, 0, 0.5)',
        lg: '1px 4px 8px 0px rgba(0, 0, 0, 0.4)',
        inner: 'inset 1px 2px 2px 0px rgb(0, 0, 0, 0.5)',
        innerLg: 'inset 1px 2px 5px 0px rgb(0, 0, 0, 0.4)',
      },
      dropShadow: {
        sm: '1px 2px 2px rgba(235, 205, 157, .1)'
      }
    },
  },
  plugins: [],
}
