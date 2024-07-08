const { nextui } = require("@nextui-org/react");
const { lime, red } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    ".index.html",
    "./src/**/*.{js,ts,tsx,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime9: "#99D52A",
      },
      backgroundImage: (theme) => ({
        "custom-gradient":
          "linear-gradient(180deg, rgba(9,9,0,1) 0%, rgba(9,9,0,0) 6%, rgba(9,9,0,0) 50%, rgba(9,9,0,0) 90%, rgba(9,9,0,1) 100%)",
        "horizontal-vignette":
          "linear-gradient(90deg, rgba(9,9,0,1) 0%, rgba(9,9,0,0) 6%, rgba(9,9,0,0) 50%, rgba(9,9,0,0) 90%, rgba(9,9,0,1) 100%)",
      }),
      fontFamily: {
        maison: ["Maison Neue Extended", "sans-serif"],
      },
      screens: {
        sm: "360px",
        md: "834px",
        xl: "1440px",
      },
      fontSize: {
        xsm: "10.2px",
        sm: "12.8px",
        base: "16px",
        xl: "20px",
        "2xl": "25px",
        "3xl": "31.3px",
        "4xl": "39.1px",
        "5xl": "48.8px",
        "6xl": "61px",
      },
      animation: {
        shimmer: "shimmer 8s infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(0%)",
          },
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: lime.lime9,
            secondary: lime.lime10,
            cool: red.red5,
          },
        },
      },
    }),
  ],
};
