module.exports = {
  darkMode: "class", // or 'media' or 'class'

  variants: {
    extend: {},
  },
  purge: ["./main.js", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  themes: [
    {
      mytheme: {
        primary: "#661AE6",
        secondary: "#D926AA",
        accent: "#1FB2A5",
        neutral: "#191D24",
        "base-100": "#2A303C",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
    },
  ],
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
