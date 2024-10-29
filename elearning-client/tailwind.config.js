module.exports = {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your dark mode colors
        dark: {
          bg: '#1a1a1a',
          text: '#ffffff',
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}