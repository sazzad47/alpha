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
        "bgDarkPrimary": "var(--bgDarkPrimary)",
        "bgDark": "var(--bgDark)",
        "bgDarkHover": "var(--bgDarkHover)",
        "bgLightPrimary": "var(--bgLightPrimary)",
        "bgLight": "var(--bgLight)",
        "bgLightHover": "var(--bgLightHover)",
        "textLight": "var(--textLight)",
        "textDark": "var(--textDark)",
        "bgButton": "var(--bgButton)",
        "bgButtonSecondary": "var(--bgButtonSecondary)",
        "bgButtonHover": "var(--bgButtonHover)",
        "bgButtonSecondaryHover": "var(--bgButtonSecondaryHover)",
        "bgButtonDark": "var(--bgButtonDark)",
        "bgButtonSecondaryDark": "var(--bgButtonSecondaryDark)",
        "bgButtonDarkHover": "var(--bgButtonDarkHover)",
        "bgButtonSecondaryDarkHover": "var(--bgButtonSecondaryDarkHover)",
      },
      flex: {
        'video-slider': '0 0 25%'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
],
}
