module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'oswald': ['Noto Serif Display', 'serif'],
        'satisfy': ['Satisfy', 'cursive'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFAA01",
          // primary: "#FAC012",
          secondary: "#04192B",
          accent: "#D66309",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],
}