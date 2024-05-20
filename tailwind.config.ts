import { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      monorama: ["monorama", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
} as Config
