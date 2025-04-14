/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green': {
          DEFAULT: '#2E8B57',
          light: '#3da06c',
          dark: '#246b43'
        },
        'brown': {
          DEFAULT: '#5D4037',
          light: '#8D6E63'
        },
        'cream': '#F5F5F5',
        'gold': '#D4AF37'
      },
      boxShadow: {
        'card': '0 4px 8px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [],
};