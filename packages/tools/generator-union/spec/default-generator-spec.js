const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

const GENERATOR_PATH = require.resolve('../generators/css-module');
const {
  CSS_MODULES_CHOICE,
  CORE_CHOICE
} = require('../utils/questions');

describe('default-generator', () => {
  describe('when chosing type is css-module', () => {
    it('creates a webpack file', (done) => {
      helpers.run(GENERATOR_PATH)
        .withPrompts({
          category: CORE_CHOICE,
          packageName: 'test',
          createNewPage: false
        })
        .then(() => {
          assert.file([
            'packages/core/test/webpack.config.js',
            'packages/core/test/src/index.css',
            'packages/core/test/package.json'
          ]);
        })
        .catch(fail)
        .then(done)
    });
  });
});
