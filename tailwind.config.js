module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grape-nuts': ['"Grape Nuts"', 'cursive'],
        'plus-jakarta-sans': ['"Plus Jakarta Sans"', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('children', '& > *')
    }
  ]
};