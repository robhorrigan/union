const path = require('path');

module.exports = {
  parser: "babel-eslint",
  env: {
    "browser": true
  },
  extends: [
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "plugin:jasmine/recommended"
  ],
  plugins: [
    "react",
    "jsx-a11y",
    "import",
    "jasmine",
    "json"
  ],
  rules: {
    'comma-dangle': "off",
     'max-len': ['error', 100, {
       tabWidth: 2,
       ignoreComments: true,
       ignoreTrailingComments: true,
       ignoreUrls: true
     }],
    /* We use different types of extensions in this project */
    'import/extensions': "off",
    'import/no-extraneous-dependencies': [
      'error',
      {devDependencies: ['spec/**/*.js', 'spec/**/*.jsx', 'webpack.*.js', 'gulpfile*']}
    ],
    /*
     * We use es6 default arguments in functional components and this rule
     * isn't smart enough to catch those use cases
     */
    'react/require-default-props': 'off'
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, 'webpack.test.js')
      }
    }
  }
};
