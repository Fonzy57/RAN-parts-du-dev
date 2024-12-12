import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px", // mobile => @media (min-width: 375px)
      sm: "768px", //  tablet portrait => @media (min-width: 720px)
      md: "1024px", // tablet paysage => @media (min-width: 1020px)
      lg: "1440px", // laptop => @media (min-width: 1435px)
      xl: "1920px", // desktop => @media (min-width: 1915px)
    },
    colors: {
      white: "#FFF",
      black: "#000",
      bgDark: "#151b36",
      bgWhite: "#fbf4ee",
      main: {
        DEFAULT: "#313d73",
        dark: "#131933",
      },
      secondary: {
        DEFAULT: "#ec6834",
        hover: "#eca834",
        active: "#",
      },
      text: { DEFAULT: "#FFF" },
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "full-main": "0 0 50px rgb(236 104 52 / 0.2)",
        photo: "0 0 50px rgb(236 104 52 / 0.5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
