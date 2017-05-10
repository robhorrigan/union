module.exports = {
  extends: [
    './.eslintrc.js',
    'plugin:jasmine/recommended'
  ],
  env: {
    jasmine: true
  },
  plugins: [
    'jasmine'
  ],
  rules: {
    /* Using "legacy" function expressions is still a valid way to write jasmine tests.
     * It isn't always helpful to provide a name for these functions
     *
     * See this:
     * https://gist.github.com/traviskaufman/11131303
     **/
    'func-names': 'off',
    'jasmine/no-spec-dupes': [1, 'branch'],
    'jasmine/no-suite-dupes': [1, 'branch'],
    /*
     * This rule is not yet compatible with monorepos
     * See: https://github.com/benmosher/eslint-plugin-import/pull/685
     * See: https://github.com/benmosher/eslint-plugin-import/issues/458
     */
    'import/no-extraneous-dependencies': 'off'
  }
};
