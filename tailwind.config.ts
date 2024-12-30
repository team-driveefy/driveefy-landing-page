import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#292A6A",
        hoverColor: "#3F416E",
        hoverLightColor: "#E4E5F7",
      },
      fontFamily: {
        heading: ["Mons Sans", "sans-serif"],
      },
      animation: {
        "slide-to-right": "slide-to-right 450ms ease-in-out",
      },
      keyframes: {
        "slide-to-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
