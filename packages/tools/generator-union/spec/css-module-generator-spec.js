const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const asyncTest = require('./support/async-test');

const GENERATOR_PATH = require.resolve('../generators/css-module');
const Generator = require(GENERATOR_PATH);
const {
  CSS_MODULES_CHOICE,
  CORE_CHOICE
} = require('../utils/questions');

describe('css-module-generator', () => {
  beforeEach(() => {
   /* Skip install step
    * Currently, the install steo doesn't work in this test environment
    * */
    spyOn(Generator.prototype, 'install');
  });

  describe('Simple case', () => {
    beforeEach(function () {
      this.promise = helpers.run(GENERATOR_PATH)
        .withPrompts({
          packageType: CORE_CHOICE,
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

  describe('with doc page', () => {
    beforeEach(function () {
      this.promise = helpers.run(GENERATOR_PATH)
        .withPrompts({
          packageName: 'test',
          packageType: CORE_CHOICE,
          wantsToCreateNewPage: true
        })
    });

    it('creates an index.js file', asyncTest((...things) => {
      assert.file([
        'packages/docs/articles/foundations/test.md'
      ]);

      assert.fileContent( 'packages/docs/articles/foundations/test.md',
        new RegExp([
          'imports:',
          "'Test': '@union/test'",
          '---',
          '# Test',
          '### Install',
          '```',
          'npm install --save @union/test',
          '```',
          '### Usage',
          '```render jsx',
          '<div className={Test.test} />',
          '```',
          '### Development',
          'To make changes to this component, go to: `./packages/core/test`.'
        ].join('\\s+'))
      );
    }));
  });
});
