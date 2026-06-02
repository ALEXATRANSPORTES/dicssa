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
        dicssa: {
          yellow: {
            DEFAULT: "#F5C518",
            bright: "#FFD700",
            dark: "#D4A30B",
          },
          dark: {
            DEFAULT: "#1A1A1A",
            pure: "#000000",
            gray: "#2A2A2A",
          },
          gray: {
            DEFAULT: "#808080",
            light: "#A0A0A0",
            border: "#E0E0E0",
          },
          light: "#F5F5F5",
        }
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "Open Sans", "sans-serif"],
        display: ["var(--font-bebas-neue)", "Oswald", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
