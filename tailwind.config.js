/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#212529",
        light: "#EEEEEE"
      }
    },
  },
  darkMode: "class",
  plugins: [],
}

