const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

const GENERATOR_PATH = require.resolve('../generators/css-module');
const {
  CSS_MODULES_CHOICE,
  CORE_CHOICE
} = require('../utils/questions');

describe('css-module-generator', () => {
  beforeEach(function () {
    this.promise = helpers.run(GENERATOR_PATH)
      .withPrompts({
        category: CORE_CHOICE,
        packageName: 'test'
      });
  });

  fit('creates a webpack file', function (done) {
    this.promise.then(() => {
      assert.file([
        'packages/core/test/webpack.config.js'
      ]);
    })
    .catch(fail)
    .then(done);
  });

  fit('creates an index.css file', function (done) {
    this.promise.then(() => {
      assert.file([
        'packages/core/test/src/index.css'
      ]);
    })
    .catch(fail)
    .then(done);
  });
});
