import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        gradient: "var(--gradient)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        stroke: "var(--stroke)",
        bronze: "var(--bronze)",
        silver: "var(--silver)",
        gold: "var(--gold)",
        platinum: "var(--platinum)",
        dark: "var(--dark)",
      },
    },
  },
  safelist: [
    "text-bronze",
    "text-silver",
    "text-gold",
    "text-platinum",
    "text-dark",
    "bg-bronze",
    "bg-silver",
    "bg-gold",
    "bg-platinum",
    "bg-dark",
  ],
  plugins: [],
} satisfies Config;
