module.exports = {
  content: ["./src/**/*.{html,js}" ,"./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    spacing: {
      '0': '0',
      '36': '9rem',
    },
    extend: {
      fontFamily: {
        'font-family': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};