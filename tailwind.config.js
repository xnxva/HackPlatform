module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'tahiti-dark': '#1c6468',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'black': '#000000',
      "white-transparent": "rgba(255, 255, 255, 0.8)",
    },
    borderRadius: {
      "full": "100vw",
      "3xl": "1.5rem",
    },
    backgroundColor: {
      "white": "#ffffff",
      'tahiti': '#3ab7bf',
      'tahiti-dark': '#26828a',
      "orange": "#edae49",
      "white-transparent": "rgba(255, 255, 255, 0.8)",
      "black-transparent": "rgba(0, 0, 0, 0.8)",
      "black": "#000000",
    },
    backgroundImage: {
      "space": "url('./pictures/space-bg.jpg')"
    },
    fontFamily: {
      "manrope": ["Manrope", "sans-serif"],
    }
  },
  plugins: [],
}