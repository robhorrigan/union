module.exports = {
  rules: {
    /* Dangling underscores is the only way to create private functions
     * in yoeman generator classes
     **/
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': ['off', 'ForOfStatement']
  }
};
