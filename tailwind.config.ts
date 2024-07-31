import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(251,62,37,1)",
        secondary: "#00BFFF",
        tertiary: "#32CD32",
        neutralLight: "#F5F5F5",
        textMain: "#1E1E1E",
        textSecondary: "#2E2E2E",
      },
      backgroundImage: {
        "background-red":
          "linear-gradient(90deg, rgba(219,10,10,1) 0%, rgba(251,62,37,1) 100%, rgba(246,31,3,1) 100%)",
        "gradient-green-purple":
          "linear-gradient(135deg, #32CD32 0%, #8A2BE2 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        primary: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
      padding: {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
      },
      margin: {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
