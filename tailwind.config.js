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
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
}
