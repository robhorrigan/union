const path = require('path');

module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: [
    'airbnb'
  ],
  plugins: [
    'json',
    'import'
  ],
  rules: {
    'comma-dangle': 'off',
     'max-len': ['error', 100, {
       tabWidth: 2,
       ignoreComments: true,
       ignoreTrailingComments: true,
       ignoreUrls: true
     }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'build-utils/**/*',
          'spec/**/*',
          'webpack.*.js',
          '**/gulpfile*',
          'webpack/**',
          '**/spec/**'
        ]
      }
    ]
  },
  settings: {
    /* Default to the node resolver. This is overriden in the pattern-library/
     * to use webpack
     * */
    'import/resolver': 'node'
  }
};