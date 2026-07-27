/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0e27',
        'dark-lighter': '#1a1f3a',
        accent: '#00d9ff',
        'accent-dark': '#0099cc',
        purple: '#7c3aed',
        'purple-dark': '#6d28d9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #00d9ff 0%, #7c3aed 100%)',
      },
    },
  },
  plugins: [],
}
