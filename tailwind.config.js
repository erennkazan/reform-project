/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      spacing:{
        '0.1': '0.063rem',
      },
    },
    variants: {
      extend: {
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}