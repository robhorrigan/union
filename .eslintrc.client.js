const path = require('path');

module.exports = {
  env: {
    browser: true
  },
  globals: {
    ENV: true,
    __webpack_public_path__: true
  },
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
    'import/extensions': 'off',
    /* This is like saying "one variable per file" */
    'react/no-multi-comp': 'off',
    /* This forces us to write components that are less readable, especially when using decorators */
    'react/prefer-stateless-function': 'off'
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, 'webpack.test.js')
      }
    }
  }
};
