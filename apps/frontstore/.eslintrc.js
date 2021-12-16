module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  plugins: [],
  extends: [ 
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  rules: {}
}
