/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px', // Monitor Profissional
      },
      colors: {
        'agencia-blue': '#3b82f6',
        'agencia-black': '#09090b',
      },
    },
  },
  plugins: [],
}