const except = require('except');
const frontMatter = require('front-matter');
const OPENED_OR_SELF_CLOSED_COMPONENT = /^\s*<[^\/]+(:?\/)?>\s*$/;
const SINGLE_LINE_COMPONENT = /^\s*<[^>]+>[^<]*<\/[^>]+>\s*$/;
const CLOSED_COMPONENT = /^\s*<\/[^>]+>\s*$/;

function importsToJs(imports) {
  let code = '';
  for (const importExpression in imports) {
    code += `import ${importExpression} from ${JSON.stringify(imports[importExpression])};\n`;
  }

  return code;
}

module.exports = function mdjsx(source) {
  this.cacheable();
  const reactRemarkablePath = require.resolve('react-remarkable');
  const { attributes, body } = frontMatter(source);
  const lines = body.split('\n');

  const { $imports } = attributes;
  const restOfFrontMatter = except(attributes, '$imports');

  const normalizedLines = lines.map((line) => {
    if (SINGLE_LINE_COMPONENT.test(line) || OPENED_OR_SELF_CLOSED_COMPONENT.test(line) || CLOSED_COMPONENT.test(line)) {
      return line;
    } else {
      return `{${JSON.stringify(line)}}`;
    }
  });

  const code = `
import React from 'react';
import Markdown from ${JSON.stringify(reactRemarkablePath)};
${importsToJs($imports)}

export const attributes = ${JSON.stringify(restOfFrontMatter)};
export default ($props) =>
<Markdown>
${normalizedLines.join('\n')}
</Markdown>
`;

  return code
};
