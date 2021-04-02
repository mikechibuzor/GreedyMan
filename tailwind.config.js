module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-color": "#43144A",
        "secondary-yellow": "#FFC700",
        "secondary-ashlike": "#CBCBFF",
        "secondary-pinklike": "#EE8D94",
        "secondary-purplelike": "#853594",
      },
      height: {
        "height-80": "80vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
