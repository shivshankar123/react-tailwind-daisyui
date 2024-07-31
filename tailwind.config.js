module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a200ff",

          secondary: "#b30000",

          accent: "#0000ff",

          neutral: "#271517",

          "base-100": "#ebfeff",

          info: "#00d1ff",

          success: "#00e8c3",

          warning: "#ff8f00",

          error: "#fc4d5c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  //...
};
