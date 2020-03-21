/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        salmon: '#E38466',
        petrol: '#13314D',
        pale: '#6E7882',
        pink: '#FCE9E4',
        catskills: '#E2E9F0',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
