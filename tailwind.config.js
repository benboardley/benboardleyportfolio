module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/8': '12.5vw',
        '1/4': '25vw',
        '1/3': '33.3vw',
        '1/2': '50vw',
        '5/8': '62.5vw',
        '3/4': '75vw',
      },
      height: {
        '1/8': '12.5vh',
        '1/4': '25vh',
        '1/3': '33.3vh',
        '1/2': '50vh',
        '5/8': '62.5vh',
        '3/4': '75vh',
      },
      backgroundImage: {
        'background': "url('C:\Users\bboar\OneDrive\Desktop\mySite\ben-boardley\src\background.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
