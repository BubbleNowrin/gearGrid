/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    // our colors theme
    colors: {
      primary: "#3B82F6", // Modern blue
      secondary: "#2563EB", // Lighter, more vibrant blue
      white: "#ffffff",
      black: "#1c1c1c",
      gray: "#686464",
      "light-gray": "#80808075",
      input: "#e2e2e2",
      red: "#EB5757",
      error: "#ff1a1a",
      blue: "#2F80ED",
      yellow: "#F4B618",
      green: "#219653",
      pink: "#EF5DA8",
      accent: "#06B6D4", // Cyan accent
      "accent-dark": "#0891B2", // Darker cyan
    },

    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        xxl: "1496px",
      },
    },
  },

  plugins: [],
};
