/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        "bgDark": "var(--bgDark)",
        "bgDarkHover": "var(--bgDarkHover)",
        "bgLight": "var(--bgLight)",
        "bgLightHover": "var(--bgLightHover)",
        "textLight": "var(--textLight)",
        "textDark": "var(--textDark)",
      },
    },
  },
  plugins: [],
}
