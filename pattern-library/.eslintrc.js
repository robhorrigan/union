const path = require('path');

module.exports = {
  env: {
    browser: true
  },
  globals: {
    ENV: true,
    __webpack_public_path__: true
  },
  extends: [
    '../.eslintrc.js'
  ],
  plugins: [
    'react',
    'jsx-a11y'
  ],
  rules: {
    /*
     * We use es6 default arguments in functional components and this rule
     * isn't smart enough to catch those use cases
     */
    'react/require-default-props': 'off',
    /* We use different types of extensions in this project */
    'import/extensions': 'off'
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, '..', 'webpack.test.js')
      }
    }
  }
};
