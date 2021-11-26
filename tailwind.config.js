module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
   extend: {
        colors: {
          body: '#2E4C6D',
          pri: '#396EB0'
        }
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
