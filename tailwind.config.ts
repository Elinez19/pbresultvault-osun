/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      purple: "#4B0064",
      electricblue: '#1e90ff',
      'electricblue-dark': '#1c86ee',
      lightgrey: "#444245",
      grey: 'rgba(0, 0, 0, 0.55)',
      lightpink: '#F8F7F7',
      pink: '#DF6751',
      bgpink: 'rgba(223, 103, 81, 0.15)',
      darkpink: '#FEEDEA',
      lightblack : '#333333',
      textbl: "#363636",
      footerlinks: 'rgba(54, 54, 54, 0.9)',
      bordertop: 'rgba(105, 120, 131, 0.16)',
      darkgrey: 'rgba(44, 9, 11, 0.8)',
      'blue': '#0075FF',
      "lightblue": "#DAEBFF",
      'navyblue': '#002834',
      'beach': '#8EA9C1',
      'circlebg' : "rgba(77, 213, 143, 0.25)",
      'darkblue' : ' #000321',
      'offwhite' : 'rgba(255, 255, 255, 0.75);',
      'blue-500' : '#0075FF',
      'darkgray' : '#90A3B4',
      'babyblue' : '#E2F3F9',
      'grey500': '#ECECEC',
      'bluegray' : "#7D82A1",
      'bluegrey' : "#7C8F9E",
      'midnightblue' : '#183B56',
      'midblue' : '#00276F',
      'bluebg' : "rgba(47, 184, 227, 0.2)",
      'border' : "rgba(128, 135, 137, 0.35)"
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "4.25rem" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "6.75rem" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    extend: {},
  },
  plugins: [],
};
