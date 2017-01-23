const loaderUtils = require('loader-utils');
const frontMatter = require('front-matter');
const except = require('except');
const {
  createComponents,
  createImports,
  createSyntaxHighlightImports
} = require('./src/build-js');
const parseMarkdown = require('./src/parse-markdown');

const DEFAULT_OPTIONS = {
  codeBlockHandlerPath: require.resolve('./src/injected-modules/default-code-block-handler'),
  syntaxHighlighting: [
    'jsx',
    'javascript',
    'markup'
  ]
};

module.exports = function (source) {
  this.cacheable();

  const options = Object.assign(
    DEFAULT_OPTIONS,
    loaderUtils.getLoaderConfig(this, 'markdown-react-loader')
  );

  const {
    metadata,
    taggedMarkdown,
    imports,
    frontMatterAttributes
  } = parseMarkdown(source, codeContent => {
    return loaderUtils.interpolateName(this, '[hash]', { content: codeContent });
  });

  /* Injected modules */
  const markdownToReactPath = require.resolve('markdown-to-react-components');
  const codeComponentPath = require.resolve('markdown-to-react-components/src/CodeComponent');
  const examplesStorePath = require.resolve('./src/injected-modules/examples-store');

return `
import React from 'react';
import examples from ${JSON.stringify(examplesStorePath)};
${createImports(imports)}
${createSyntaxHighlightImports(options.syntaxHighlighting)}
import markdownToReact from ${JSON.stringify(markdownToReactPath)};
import CodeComponent from ${JSON.stringify(codeComponentPath)};
import CodeBlockHander from ${JSON.stringify(options.codeBlockHandlerPath)};

${createComponents(metadata)}

markdownToReact.configure({
  code: class Code extends CodeComponent {
    render () {
      const { language, code } = this.props;

      let example = examples.get(code);
      let exampleElement;
      let src;


      if (example) {
        exampleElement = example.element;
        src = example.code;
      } else {
        src = code;
      }

      return (
        <CodeBlockHander src={src} language={language} element={exampleElement} />
      );
    }
  }
});

const result = markdownToReact(${JSON.stringify(taggedMarkdown)});
export const attributes = ${JSON.stringify(frontMatterAttributes)};
export default function MDWrapper() {
  console.log(result.toc);
  return <div>{result.tree}</div>;
}
`;
};
