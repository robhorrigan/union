import loaderUtils from 'loader-utils';
import frontMatter from 'front-matter';
import createTokens from './src/createTokens';
import parseTokens from './src/parseTokens';

function importsToJs(imports = {}) {
  return Object.keys(imports).reduce((code, importExpression) => {
    const path = JSON.stringify(imports[importExpression]);

    return `${code}import ${importExpression} from ${path};\n`;
  }, '');
}

module.exports = function mdjsx(source) {
  this.cacheable();
  const marksyCompilerPath = (loaderUtils.getOptions(this) || {}).compilerPath;
  const { attributes, body } = frontMatter(source);
  const lines = body.split('\n');

  const { $imports, ...restOfFrontMatter } = attributes;

  const tokenizedLines = createTokens(lines);
  const normalizedLines = parseTokens(tokenizedLines);

  const code = `
import React from 'react';
import compile from ${JSON.stringify(marksyCompilerPath)};
${importsToJs($imports)}

const $attributes = ${JSON.stringify(restOfFrontMatter)};

exports.attributes = $attributes;
exports.default = ($props) => (
<div>
${normalizedLines.join('\n')}
</div>
)
`;

  return code;
};
