/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f1115',
        card: '#181a20',
        'card-hover': '#1f2229',
        primary: '#3b82f6',
        'primary-hover': '#2563eb',
        accent: '#8b5cf6',
        'accent-light': '#c4b5fd',
        success: '#10b981',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
