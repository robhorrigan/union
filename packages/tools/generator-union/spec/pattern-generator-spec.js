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
      assert.fileContent('packages/pattern-library/test-pattern/package.json',
        new RegExp([
          '"name": "@xo-union/test-pattern",',
          '"version": "1.0.0",',
          '"main": "index.js",',
          '"dependencies": {',
          '"css-module-builder": "\\^1.0.0-beta.5",',
          '"react": "\\^15.4.2"',
          '}'
        ].join('\\s+'))
      )
    }));

    it('creates a css file', asyncTest(() => {
      assert.fileContent('pattern-library/src/test-pattern/css/index.css',
        new RegExp([
          "\\.test-pattern {",
          "color: red;",
          "}"
        ].join('\\s+'))
      )
    }));

    it('creates a simple react component', asyncTest(() => {
      assert.fileContent('pattern-library/src/test-pattern/index.jsx',
        new RegExp([
          "import React, { PropTypes } from 'react';",
          "import styles from '@xo-union/test-pattern/css'",
          'export default function TestPattern\\({ greeting = "Hello world" }\\) {',
          'return <div className={styles.testPattern}>{greeting}</div>;',
          '}',
          'TestPattern.propTypes = {',
          'greeting: PropTypes.string.isRequired',
          '}'
        ].join('\\s+'))
      );
    }));

    it('creates a test', () => {
      assert.fileContent('pattern-library/spec/test-pattern/spec.jsx',
        new RegExp([
          "import React from 'react';",
          "import { mount } from 'enzyme';",
          "import TestPattern from '#/test-pattern';",
          "describe\\('<TestPattern>', \\(\\) => {",
          "it\\('says hello', \\(\\) => {",
          "const subject = mount\\(<TestPattern />\\);",
          "expect\\(subject\\.text\\(\\)\\).toContain\\('Hello there'\\);",
          "}\\);",
          "}\\);"
        ].join('\\s+'))
      );
    });

    it('creates a doc file', () => {
      assert.fileContent('pattern-library/docs/articles/test-pattern.md',
        new RegExp([
          '\\$imports:',
          "'TestPattern': '@xo-union/test-pattern'",
          "packageJson: '@xo-union/test-pattern/package.json'",
          "'\\{ InstallSnippet, Demo, PropTypesTable \\}': '#docs/doc-components'",
          "'TestPatternMetadata': '!!react-docgen-loader!#/test-pattern'",
          '---',
          '<h1>\\{\\$props\\.title\\}</h1>',
          '### Install',
          '<InstallSnippet packageJson=\\{packageJson\\} />',
          '### Usage',
          '<Demo>',
          '<TestPattern />',
          '</Demo>',
          '<PropTypesTable metadata=\\{TestPatternMetadata.props\\} />',
          '### Development',
          'To make changes to this pattern, go to: `./pattern-library/src/test-pattern`.',
          'Tests are in `./pattern-library/spec/test-pattern`.'
        ].join('\\s+'))
      );
    });

    it('creates an entrypoints file', () => {
      assert.fileContent('pattern-library/src/test-pattern/.entrypoints.json',
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
