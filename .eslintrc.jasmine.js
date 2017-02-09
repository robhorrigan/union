module.exports = {
  extends: [
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
    'func-names': 'off'
  }
};
