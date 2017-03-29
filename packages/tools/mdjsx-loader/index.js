const except = require('except');
const frontMatter = require('front-matter');

const OPENED_OR_SELF_CLOSED_COMPONENT = /^\s*<.+(:?\/)?>\s*$/;
const SINGLE_LINE_COMPONENT = /^\s*<[^>]+>[^<]*<\/[^>]+>\s*$/;
const CLOSED_COMPONENT = /^\s*<\/[^>]+>\s*$/;

function importsToJs(imports = {}) {
  return Object.keys(imports).reduce((code, importExpression) => {
    const path = JSON.stringify(imports[importExpression]);

    return `${code}import ${importExpression} from ${path};\n`;
  }, '');
}

module.exports = function mdjsx(source) {
  this.cacheable();
  const reactRemarkablePath = require.resolve('react-remarkable');
  const { attributes, body } = frontMatter(source);
  const lines = body.split('\n');

  const { $imports } = attributes;
  const restOfFrontMatter = except(attributes, '$imports');

  const normalizedLines = lines.map((line) => {
    const jsxPatterns = [
      SINGLE_LINE_COMPONENT,
      OPENED_OR_SELF_CLOSED_COMPONENT,
      CLOSED_COMPONENT
    ];

    if (jsxPatterns.some(pattern => pattern.test(line))) {
      return line;
    }

    return `{${JSON.stringify(line + '\n')}}`;
  });

  const code = `
import React from 'react';
import Markdown from ${JSON.stringify(reactRemarkablePath)};
${importsToJs($imports)}

const $attributes = ${JSON.stringify(restOfFrontMatter)};

exports.attributes = $attributes;
exports.default = ($props) =>
<Markdown>
${normalizedLines.join('\n')}
</Markdown>
`;

  return code;
};
