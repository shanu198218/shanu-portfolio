import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090b",
        foreground: "#f4f4f5",
        lime: {
          DEFAULT: "#ccff00",
          accent: "#ccff00",
          glow: "#bef264",
          dim: "#84cc16",
          dark: "#4d7c0f",
        },
        cyber: {
          bg: "#08090b",
          card: "#0f1216",
          "card-hover": "#14181e",
          border: "#1f2630",
          "border-bright": "#2e3947",
          muted: "#7d8b99",
          tag: "#161b22",
        },
        card: {
          DEFAULT: "#0f1216",
          foreground: "#f4f4f5",
        },
        popover: {
          DEFAULT: "#0f1216",
          foreground: "#f4f4f5",
        },
        primary: {
          DEFAULT: "#ccff00",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#181f29",
          foreground: "#f4f4f5",
        },
        muted: {
          DEFAULT: "#181f29",
          foreground: "#8592a3",
        },
        accent: {
          DEFAULT: "#ccff00",
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        border: "#1f2630",
        input: "#1f2630",
        ring: "#ccff00",
      },
      fontFamily: {
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
        serif: [
          '"Newsreader"',
          '"Playfair Display"',
          '"Cormorant Garamond"',
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "serif",
        ],
        sans: [
          '"Space Grotesk"',
          '"Inter"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
