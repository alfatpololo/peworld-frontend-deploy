/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      backgroundImage: (theme) => ({
        'login': "url('/Group 979 (3).png')",
      }),
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif']
      },
      colors: {
        primary: '#5E50A1',
        secondary: '#FBB017',
        dark: '#1F2A36',
        grey: '#E5E5E5',
        hardGrey: '#46505C',
        softGrey: '#9EA0A5',
        lightGrey: '#E2E5ED',
        white: '#FFFFFF',
        anotherWhite: '#F6F7F8'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}
