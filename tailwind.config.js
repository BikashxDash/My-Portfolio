module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",   // Soft American Blue
        textMain: "#1F2937",  // Dark gray (main text)
        textMuted: "#6B7280"  // Muted gray (sub text)
      }
    }
  },
  plugins: []
};
