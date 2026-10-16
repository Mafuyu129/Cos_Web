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
        primary: {
          DEFAULT: "#0038AE",
          dark: "#00257A",
          deep: "#001852",
          light: "#EBF2FF"
        },
        accent: {
          DEFAULT: "#48ACD6",
          dark: "#2B89B2",
          light: "#E8F7FC",
          glow: "#7AD3F7"
        },
        "dark-bg": "#04091A",
        "dark-section": "#081128",
        "dark-card": "#0D1936",
        "light-bg": "#F4F9FD",
        "text-dark": "#0A1931",
        "text-muted": "#526581",
        "text-light": "#CBEBFF",
        border: "#D4E6F5"
      },
      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "IBM Plex Sans Thai",
          "Sarabun",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        serif: [
          "Plus Jakarta Sans",
          "IBM Plex Sans Thai",
          "Sarabun",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "monospace"
        ]
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(0, 56, 174, 0.18), 0 8px 24px -8px rgba(72, 172, 214, 0.12)",
        soft: "0 12px 36px -8px rgba(10, 25, 49, 0.07)",
        clinical: "0 4px 20px -2px rgba(0, 56, 174, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)",
        "glow-blue": "0 0 35px rgba(72, 172, 214, 0.35)"
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0038AE 0%, #48ACD6 100%)",
        "brand-gradient-reverse": "linear-gradient(135deg, #48ACD6 0%, #0038AE 100%)",
        "clinical-dark": "linear-gradient(145deg, #04091A 0%, #001F66 55%, #09356E 100%)",
        "clinical-surface": "linear-gradient(180deg, #FFFFFF 0%, #F4F9FD 100%)"
      }
    }
  },
  plugins: []
};

export default config;

