const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const asyncTest = require('./support/async-test');
const { COMPONENT_CHOICE } = require('../utils/questions');

const GENERATOR_PATH = require.resolve('../generators/component');
const Generator = require(GENERATOR_PATH);

describe('component-generator', () => {
  beforeEach(() => {
    /* Skip install step
    * Currently, the install steo doesn't work in this test environment
    * */
    spyOn(Generator.prototype, 'install');
  });

  describe('without css module', () => {
    beforeEach(function () {
      this.promise = helpers.run(GENERATOR_PATH)
        .withPrompts({
          packageName: 'test',
          wantsToCreateCssModule: false
        })
    });

    it('creates a webpack file', asyncTest(() => {
      assert.file([
        'packages/components/test/webpack.config.js'
      ]);
    }));

    it('creates an index.js file', asyncTest((...things) => {
      assert.file([
        'packages/components/test/src/index.js'
      ]);

      assert.fileContent('packages/components/test/src/index.js',
        new RegExp([
          "import React from 'react';",
          'export default function Test\\(\\) \\{',
          'return \\(',
          '<div>',
          'Hello World',
          '</div>',
          '\\);',
          '\\}'
        ].join('\\s+'))
      );
    }));

    it('creates a .babelrc file', asyncTest(() => {
      assert.file([
        'packages/components/test/.babelrc'
      ]);
    }));

    it('creates a package.json file', asyncTest(() => {
      assert.file([
        'packages/components/test/package.json'
      ]);

      assert.fileContent('packages/components/test/package.json', /"name": "@union\/test"/);
    }));
  });

  describe('with a css-module', () => {
    beforeEach(function () {
      this.promise = helpers.run(GENERATOR_PATH)
        .withPrompts({
          packageName: 'test',
          wantsToCreateCssModule: true
        })
    });

    it('creates a webpack file', asyncTest(() => {
      assert.file([
        'packages/components/test/webpack.config.js'
      ]);

      assert.fileContent('packages/components/test/webpack.config.js',
        new RegExp([
          'externals: {',
          "'@union/test-css': true,"
        ].join('\\s+'))
      );
    }));

    it('creates an index.js file', asyncTest((...things) => {
      assert.file([
        'packages/components/test/src/index.js'
      ]);

      assert.fileContent('packages/components/test/src/index.js',
        new RegExp([
          "import React from 'react';",
          "import styles from '@union/test-css';",
          'export default function Test\\(\\) \\{',
          'return \\(',
          '<div className={styles.test}>',
          '</div>',
          '\\);',
          '\\}'
        ].join('\\s+'))
      );
    }));
  });
});
