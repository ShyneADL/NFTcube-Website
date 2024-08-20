/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9800FE',
        orange: '#FF8A71',
        lightBlue: '#81AFDD',
        blog: '#042c54',
        footer: '#031B34',
        bg: '#040C18',
      },
      fontFamily: {
        sora: 'Sora',
        inter: 'Inter',
      }
    },
  },
  plugins: [],
}