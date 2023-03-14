/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-background': "url('../images/background.png')",
      },
    },
  },
  plugins: [],
}
