/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E1B18', 
        secondary: '#2660A4',  
        background: '#FFFAFF', 
        background2: '#002147', 
      },
      fontFamily: {
        readex: ['ReadexPro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
