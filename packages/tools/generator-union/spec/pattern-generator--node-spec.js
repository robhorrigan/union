const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const asyncTest = require('./support/async-test');

const generatorPath = require.resolve('../generators/pattern');

describe('pattern generator', () => {
  describe('pattern folder', () => {
    beforeEach(function () {
      this.promise = helpers.run(generatorPath).withPrompts({
        patternName: 'test-pattern'
      });
    });

    it('creates a package json file', asyncTest(() => {
      assert.fileContent('packages/@xo-union/test-pattern/package.json',
        new RegExp([
          '"name": "@xo-union/test-pattern",',
          '"version": "0.0.1",',
          '"main": "lib/index.js",',
          '"dependencies": {',
          '"css-module-builder": "\\^1.0.0-beta.5",',
          '"react": "\\^15.5.0",',
          '"prop-types": "\\^15.5.8"',
          '}'
        ].join('\\s+'))
      );
    }));

    it('creates a css file', asyncTest(() => {
      assert.fileContent('packages/@xo-union/test-pattern/src/css/index.css',
        new RegExp([
          '\\.test-pattern {',
          'color: red;',
          '}'
        ].join('\\s+'))
      );
    }));

    it('creates a simple react component', asyncTest(() => {
      assert.fileContent('packages/@xo-union/test-pattern/src/index.jsx',
        new RegExp([
          "import React from 'react';",
          "import PropTypes from 'prop-types';",
          "import styles from '@xo-union/test-pattern/lib/css';",
          'export default function TestPattern\\({ greeting = "Hello world" }\\) {',
          'return <div className={styles.testPattern}>{greeting}</div>;',
          '}',
          'TestPattern.propTypes = {',
          'greeting: PropTypes.string',
          '}'
        ].join('\\s+'))
      );
    }));

    it('creates a test', () => {
      assert.fileContent('packages/@xo-union/test-pattern/src/browser-spec.jsx',
        new RegExp([
          "import React from 'react';",
          "import { mount } from 'enzyme';",
          "import TestPattern from '@xo-union/test-pattern/src/index';",
          "describe\\('<TestPattern>', \\(\\) => {",
          "it\\('says hello', \\(\\) => {",
          'const subject = mount\\(<TestPattern />\\);',
          "expect\\(subject\\.text\\(\\)\\).toContain\\('Hello there'\\);",
          '}\\);',
          '}\\);'
        ].join('\\s+'))
      );
    });

    it('creates a doc file', () => {
      assert.fileContent('docs/articles/test-pattern.md',
        new RegExp([
          '\\$imports:',
          "'TestPattern': '@xo-union/test-pattern'",
          "packageJson: '@xo-union/test-pattern/package.json'",
          "InstallSnippet: '@components/InstallSnippet'",
          "Demo: '@components/Demo'",
          "PropTypesTable: '@components/PropTypesTable'",
          "'TestPatternMetadata': '!!react-docgen-loader!@xo-union/test-pattern/src/index'",
          '---',
          '# Pattern name',
          '### Install',
          '<InstallSnippet packageJson=\\{packageJson\\} />',
          '### Usage',
          '<Demo>',
          '<TestPattern />',
          '</Demo>',
          '<PropTypesTable metadata=\\{TestPatternMetadata.props\\} />',
          '### Development',
          'To make changes to this pattern, go to: `./packages/@xo-union/test-pattern/src`.',
        ].join('\\s+'))
      );
    });

    it('creates an entrypoints file', () => {
      assert.fileContent('packages/@xo-union/test-pattern/entrypoints.json',
        new RegExp([
          '\\[',
          '"index.jsx",',
          '"css/index.css"',
          '\\]'
        ].join('\\s+'))
      );
    });
  });
});
