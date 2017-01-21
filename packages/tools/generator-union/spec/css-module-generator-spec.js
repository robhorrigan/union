const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const asyncTest = require('./support/async-test');

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
      })
  });

  it('creates a webpack file', asyncTest(() => {
    assert.file([
      'packages/core/test/webpack.config.js'
    ]);
  }));

  it('creates an index.css file', asyncTest(() => {
    assert.file([
      'packages/core/test/src/index.css'
    ]);
  }));
});
