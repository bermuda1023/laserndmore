import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      colors: {
        cream: "#faf8f5",
        ink: "#1a1a2e",
        blush: "#fdf2f8",
        rose: {
          DEFAULT: "#c9184a",
          light: "#fb7185",
          dark: "#9f1239"
        },
        gold: {
          DEFAULT: "#b8860b",
          light: "#d4a843",
          muted: "#92702a"
        },
        warm: {
          50: "#faf8f5",
          100: "#f5f0ea",
          200: "#e8dfd4",
          300: "#d4c5b0",
          400: "#b8a58a",
          500: "#9c866b"
        }
      },
      boxShadow: {
        soft: "0 4px 24px rgba(26, 26, 46, 0.06)",
        glow: "0 8px 40px rgba(26, 26, 46, 0.1)",
        card: "0 1px 3px rgba(26, 26, 46, 0.04), 0 6px 24px rgba(26, 26, 46, 0.06)"
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #faf8f5 0%, #fdf2f8 40%, #fff1f2 70%, #faf8f5 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #1a1a2e 0%, #2d1b3d 50%, #1a1a2e 100%)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem"
      }
    }
  },
  plugins: []
};

export default config;
