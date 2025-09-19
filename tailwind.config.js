/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scaleUpFadeIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        popIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        scaleUpFadeIn: "scaleUpFadeIn 0.3s ease-out forwards",
        slideIn: "slideIn 0.3s ease-out forwards",
        fadeIn: "fadeIn 0.3s ease-out forwards",
        popIn: "popIn 0.3s ease-out forwards",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        system: ["system-ui", "sans-serif"],
      },
      colors: {
        // Primary brand colors - Indigo
        primary: {
          DEFAULT: "#6366F1", // Indigo 500
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
          950: "#1E1B4B",
          foreground: "#FFFFFF",
        },

        // Secondary colors - Gray scale
        secondary: {
          DEFAULT: "#F8FAFC", // Slate 50
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
          foreground: "#0F172A",
        },

        // Success colors - Green
        success: {
          DEFAULT: "#10B981", // Emerald 500
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
          950: "#022C22",
          foreground: "#FFFFFF",
        },

        // Warning colors - Amber
        warning: {
          DEFAULT: "#F59E0B", // Amber 500
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
          950: "#451A03",
          foreground: "#FFFFFF",
        },

        // Destructive colors - Red
        destructive: {
          DEFAULT: "#EF4444", // Red 500
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
          950: "#450A0A",
          foreground: "#FFFFFF",
        },

        // Background and foreground
        background: "#FFFFFF",
        foreground: "#0F172A",

        // Muted colors
        muted: {
          DEFAULT: "#F1F5F9", // Slate 100
          foreground: "#64748B", // Slate 500
        },

        // Accent colors
        accent: {
          DEFAULT: "#F1F5F9", // Slate 100
          foreground: "#0F172A", // Slate 900
        },

        // Card colors
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#0F172A",
        },

        // Popover colors
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#0F172A",
        },

        // Border and input colors
        border: "#E2E8F0", // Slate 200
        input: "#E2E8F0", // Slate 200
        ring: "#6366F1", // Indigo 500

        // Sidebar specific colors
        sidebar: {
          background: "#FFFFFF",
          foreground: "#0F172A",
          border: "#E2E8F0",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      fontSize: {
        xxxs: ["0.5rem", { lineHeight: "0.75rem" }],
        xxs: ["0.625rem", { lineHeight: "1rem" }],
      },
    },
  },
  plugins: [],
}

export default config
