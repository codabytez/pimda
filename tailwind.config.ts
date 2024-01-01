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
        primary: {
          "1": "#00BED7",
          "2": "#1AC5DB",
          "3": "#33CBDF",
          "4": "#4DD1E3",
          "5": "#66D8E7",
          "6": "#80DEEB",
          "7": "#99E5EF",
          "8": "#B2EBF3",
          "9": "#CCF2F7",
          "10": "#E5F9FB",
        },
        "primary-green": {
          600: "#082326",
        },
        secondary: {
          "1": "#F5F5F5",
          "2": "#DB4444",
        },
        button: {
          "1": "#0F6",
        },
        gray: {
          "1": "#323234",
          "2": "#474748",
          "3": "#5B5B5D",
          "4": "#707071",
          "5": "#848485",
          "6": "#989899",
          "7": "#ADADAE",
          "8": "#C1C1C2",
          "9": "#D6D6D6",
          "10": "#EAEAEB",
        },
        amber: "#FBBC04",
        beige: "#E0C8A4",
        "dark-gray": "#0F0F0F",
        "dirty-green": "#A0B570",
        "lemon-green": "#EEFF61",
        "sky-blue": "#1E97C6",
      },
      fontSize: {
        "Text-xs": [
          "0.75rem",
          {
            lineHeight: "1.125rem",
          },
        ],
        "Text-sm": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
          },
        ],
        "Text-md": [
          "1rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        "Text-lg": [
          "1.125rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        "Text-xl": [
          "1.25rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        "Display-xs": [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        "Display-sm": [
          "1.875rem",
          {
            lineHeight: "2.375rem",
          },
        ],
        "Display-md": [
          "2.25rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: "-2%",
          },
        ],
        "Display-lg": [
          "3rem",
          {
            lineHeight: "3.75rem",
            letterSpacing: "-2%",
          },
        ],
        "Display-xl": [
          "3.75rem",
          {
            lineHeight: "4.5rem",
            letterSpacing: "-2%",
          },
        ],
        "Display-2xl": [
          "4.5rem",
          {
            lineHeight: "5.625rem",
            letterSpacing: "-2%",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
