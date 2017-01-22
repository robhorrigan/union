const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const asyncTest = require('./support/async-test');
const { COMPONENT_CHOICE } = require('../utils/questions');

const GENERATOR_PATH = require.resolve('../generators/component');

describe('component-generator', () => {
  beforeEach(function () {
    this.promise = helpers.run(GENERATOR_PATH)
      .withPrompts({
        packageName: 'test'
      })
  });

  it('creates a webpack file', asyncTest(() => {
    assert.file([
      'packages/components/test/webpack.config.js'
    ]);
  }));

  it('creates an index.js file', asyncTest(() => {
    assert.file([
      'packages/components/test/src/index.js'
    ]);
  }));

  it('creates a .babelrc file', asyncTest(() => {
    assert.file([
      'packages/components/test/.babelrc'
    ]);
  }));
});
