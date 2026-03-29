import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1B3A6B",
        "royal-blue": "#2A6DB5",
        orange: "#F47920",
        silver: "#D4D8DD",
      },
      fontFamily: {
        'barlow': ['var(--font-barlow)'],
        'barlow-condensed': ['var(--font-barlow-condensed)'],
      },
    },
  },
  plugins: [],
};
export default config;
