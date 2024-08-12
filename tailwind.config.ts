import type { Config } from "tailwindcss"

const config: Config = {
   content: [
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      container: {
         center: true,
         padding: "1.25rem",
         screens: {
            sm: "100%",
            md: "100%",
            lg: "594px",
            xl: "594px",
            "2xl": "594px",
         },
      },
      extend: {
         fontSize: {
            xs: "0.85rem",
            sm: "0.9rem",
         },
         colors: {
            border: "hsl(var(--border))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: "hsl(var(--primary))",
            "primary-darker": "hsl(var(--primary-darker))",
            secondary: "hsl(var(--secondary))",
            muted: {
               DEFAULT: "hsl(var(--muted))",
               foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
               DEFAULT: "hsl(var(--accent))",
               foreground: "hsl(var(--accent-foreground))",
            },
         },
         borderRadius: {
            xl: `calc(var(--radius) + 4px)`,
            lg: `var(--radius)`,
            md: `calc(var(--radius) - 6px)`,
            sm: "calc(var(--radius) - 8px)",
         },
         fontFamily: {
            primary: "var(--font-primary)",
            secondary: "var(--font-secondary)",
         },
         boxShadow: {
            shadow: "var(--shadow)",
         },
      },
   },
   plugins: [],
}
export default config
