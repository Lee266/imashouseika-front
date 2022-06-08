module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#1A4A43',
        sub: '#DDD23B',
        test: '#00352A',
      },
      zIndex:{
        '100': '100',
      },
    },
  },
  // plugins: [],
}
