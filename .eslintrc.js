const path = require('path');

module.exports = {
  env: {
    browser: true
  },
  globals: {
    ENV: true,
    __webpack_public_path__: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: [
    'airbnb'
  ],
  plugins: [
    'react',
    'jsx-a11y',
    'json',
    'import'
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
    'react/prefer-stateless-function': 'off',
    'comma-dangle': 'off',
     'max-len': ['error', 100, {
       tabWidth: 2,
       ignoreComments: true,
       ignoreTrailingComments: true,
       ignoreUrls: true
     }],
    /* We have tests that cover this in a more thorough fashion */
    'import/no-extraneous-dependencies': [ 'off' ]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, 'webpack.test.babel.js')
      }
    }
  }
};
