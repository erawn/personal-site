/** @type {import('tailwindcss').Config} */
module.exports = {
  dark: "class",
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        LibreFranklin: ["LibreFranklin", "sans-serif"],
        LibreFranklinItalic: ["LibreFranklinItalic", "sans-serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "h5, h6": {
              color: theme("colors.emerald.700"),
              fontWeight: "bold",
              fontFamily: theme("fontFamily.serif").join(", "),
            },
          },
        },
      }),
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        quickpose: {
          10: "#89F8FE",
          20: "#84EEFE",
          30: "#7FE4FE",
          40: "#7AD9FE",
          50: "#75CEFF",
          60: "#6FC1FF",
          70: "#6AB4FF",
          80: "#65A5FF",
        },
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
