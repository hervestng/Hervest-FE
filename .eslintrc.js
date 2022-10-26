module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'eslint:recommended' // <- add this line
    // 'plugin:prettier/recommended', <- remove this line
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  // add your custom rules here
  rules: {
    indent: 2,
    'arrow-parens': 0,
    'no-new': 0,
    'no-unused-expressions': 0,
    'vue/no-v-html': 0,
    'space-before-function-paren': 0,
    'no-console': 0,
    'operator-linebreak': 0,
    'sort-keys': [0, 'asc', { caseSensitive: true, natural: true, minKeys: 2 }],
    'vue/attributes-order': [
      2,
      {
        alphabetical: true
      }
    ],
    'vue/no-vue-html': 0,
    'vue/singleline-html-element-content-newline': 0
  },
  plugins: ['prettier']
}
