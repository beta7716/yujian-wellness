/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1f2a2e",
          50: "#f6f6f4",
          100: "#e3e4e0",
          200: "#c2c4be",
          300: "#9ea29a",
          400: "#747972",
          500: "#525750",
          600: "#3b3f38",
          700: "#2b2e29",
          800: "#1f2a2e",
          900: "#131a1d",
        },
        smoke: {
          DEFAULT: "#f4efe6",
          50: "#fbf8f3",
          100: "#f4efe6",
          200: "#e9e0d0",
          300: "#d8cbb1",
        },
        cinnabar: {
          DEFAULT: "#b5371f",
          light: "#d75a3f",
          dark: "#8a2814",
        },
        bamboo: {
          DEFAULT: "#5b8a72",
          light: "#86b39a",
          dark: "#3f6a55",
        },
        gold: {
          DEFAULT: "#c5a253",
          light: "#dcc189",
          dark: "#9c7d3a",
        },
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Cormorant Garamond"', "serif"],
        sans: ['"Noto Sans SC"', "system-ui", "sans-serif"],
        display: ['"Cormorant Garamond"', '"Noto Serif SC"', "serif"],
      },
      letterSpacing: {
        widest: "0.32em",
      },
      animation: {
        "ken-burns": "ken-burns 20s ease-in-out infinite alternate",
        "fade-up": "fade-up 0.9s ease-out forwards",
        "fade-in": "fade-in 1.2s ease-out forwards",
        "marquee": "marquee 40s linear infinite",
        "mist": "mist 14s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
      },
      keyframes: {
        "ken-burns": {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.08) translate(-1%, -1%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        mist: {
          "0%, 100%": { transform: "translateX(0) translateY(0)", opacity: "0.55" },
          "50%": { transform: "translateX(4%) translateY(-2%)", opacity: "0.75" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
