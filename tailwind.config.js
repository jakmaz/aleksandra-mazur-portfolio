/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noticia: ["'Noticia Text'", 'serif'],
        handwritten: ["'Mr De Haviland'", 'serif']
      }
    },
  },
  plugins: [],
}

