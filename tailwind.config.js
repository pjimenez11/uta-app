/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",],
  theme: {
    colors: {
      'japanese-maple': {
        '50': '#fff0f0',
        '100': '#ffdede',
        '200': '#ffc2c2',
        '300': '#ff9797',
        '400': '#ff5c5c',
        '500': '#ff2929',
        '600': '#f90909',
        '700': '#d20303',
        '800': '#ad0707',
        '900': '#750b0b',
        '950': '#4e0101',
      },
      ...require('tailwindcss/colors'),
    },
    extend: {},
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
  darkMode: 'class',

}

