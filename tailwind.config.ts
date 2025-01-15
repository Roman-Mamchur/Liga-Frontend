import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                secondBackground: "var(--background-secondary)",
                gradient: "var(--gradient)",
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                stroke: "var(--stroke)",
            },
        },
    },
    plugins: [],
} satisfies Config;
