/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
