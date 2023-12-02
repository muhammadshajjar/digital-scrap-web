/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#DDF8E2",
          800: "#42A554",
        },
        secondary: {
          100: "#2B2B2B",
          200: "#F5F5F5",
        },
      },
    },
  },
  plugins: [],
  // important: true,
  keyframes: {
    shimmer: {
      "100%": {
        transform: "translateX(100%)",
      },
    },
  },
};
