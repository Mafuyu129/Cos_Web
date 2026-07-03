import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    screens: {
      sm: "390px",
      md: "834px",
      lg: "1024px",
      xl: "1440px"
    },
    extend: {
      colors: {
        primary: "#0038AE",
        accent: "#48ACD6",
        "dark-bg": "#050816",
        "dark-section": "#0B1224",
        "dark-card": "#111A2E",
        "light-bg": "#F6FBFF",
        "text-dark": "#10223F",
        "text-muted": "#64748B",
        "text-light": "#CDEFFF",
        border: "#D8E9F5"
      },
      fontFamily: {
        sans: [
          "DM Sans",
          "Noto Sans Thai",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        serif: [
          "Cormorant Garamond",
          "Georgia",
          "Noto Serif Thai",
          "serif"
        ]
      },
      boxShadow: {
        premium: "0 24px 70px rgba(0, 56, 174, 0.22)",
        soft: "0 18px 48px rgba(16, 34, 63, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
