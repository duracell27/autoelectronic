import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["var(--font-avenir)", "sans-serif"],
        unbounded: ["var(--font-unbounded)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;