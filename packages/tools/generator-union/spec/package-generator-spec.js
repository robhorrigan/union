const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const asyncTest = require('./support/async-test');

const GENERATOR_PATH = require.resolve('../generators/package');
const {
  CSS_MODULES_CHOICE,
  CORE_CHOICE
} = require('../utils/questions');

describe('package-generator', () => {
  beforeEach(function () {
    this.promise = helpers.run(GENERATOR_PATH)
      .withPrompts({
        category: CORE_CHOICE,
        packageName: 'test'
      })
  });

  it('creates a package.json file', asyncTest(() => {
    assert.file([
      'packages/core/test/package.json'
    ]);
  }));

  it('gives the package the right name', asyncTest(() => {
    assert.fileContent('packages/core/test/package.json', /"name": "@union\/test"/);
  }));

  it('sets the right main file', asyncTest(() => {
    assert.fileContent('packages/core/test/package.json', /"main": "lib\/index.js"/);
  }));
});
