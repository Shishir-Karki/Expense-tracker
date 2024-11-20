/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          800: '#1a1a1a',
          900: '#121212'
        },
        card: {
          bg: 'rgba(255, 255, 255, 0.05)'
        }
      }
    },
  },
  plugins: [],
}