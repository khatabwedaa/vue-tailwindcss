module.exports = {
  purge: [
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto'],
        'tajawal': ['Tajawal'],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
}
