/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)'
      }
    },
    screens: {
      md: "710px",
      lg: "900px"
    }
  },
  plugins: [],
}

