module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      pri: ["Inconsolata", "monospace"],
    },
    extend: {
      colors: {
        deepBlue: {
          100: "#cfd1d4",
          200: "#9fa2aa",
          300: "#6f747f",
          400: "#3f4555",
          500: "#0f172a",
          600: "#0c1222",
          700: "#090e19",
          800: "#060911",
          900: "#030508",
        },
        textWhite: {
          100: "#f9fafc",
          200: "#f3f6f9",
          300: "#eef1f6",
          400: "#e8edf3",
          500: "#e2e8f0",
          600: "#b5bac0",
          700: "#888b90",
          800: "#5a5d60",
          900: "#2d2e30",
        },
        textGrey: {
          100: "#e8ebef",
          200: "#d0d6de",
          300: "#b9c2ce",
          400: "#a1adbd",
          500: "#8a99ad",
          600: "#6e7a8a",
          700: "#535c68",
          800: "#373d45",
          900: "#1c1f23",
        },
      },
    },
  },
  plugins: [],
};
