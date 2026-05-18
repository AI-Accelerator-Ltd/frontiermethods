import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // AIA brand tokens
        gable: {
          DEFAULT: "#1B2F3C",
          deep: "#0E1A23",
        },
        turq: {
          DEFAULT: "#00FFBC", // bright turquoise — callouts only, never as text on light
          text: "#007A5E", // accessible turquoise for text on light surfaces (WCAG 5.32:1)
        },
        dodger: "#00B1FF",
        cream: "#F7F3EB",
        paper: "#FCFAF5",
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.025em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
