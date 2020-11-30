module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary_cyan: "#00B6C7",
        primary_blue: '2D3248',
      },
      fontFamily:{
        kumbh:['Kumbh Sans'],
      },
      screens:{
        'mobile': '375px',
      },
      zIndex:{
        '-1': '-1',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
