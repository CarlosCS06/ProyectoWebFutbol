/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
    daisyui: {
    themes: [
        {
        sports: {
            primary: "#16a34a",
            secondary: "#facc15",
            accent: "#1e3a8a",
            neutral: "#111827",
            "base-100": "#ffffff",
        },
        },
    ],
    },
};
