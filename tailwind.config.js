module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff8d52",
          secondary: "#3c4d56",
          accent: "#787878",
          neutral: "#f0f0f0",
          info: "#3c4d56",
          success: "#29363c",
          warning: "#FBBD23",
          error: "#F87272",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}