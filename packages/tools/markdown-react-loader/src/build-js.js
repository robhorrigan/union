exports.createImports = function createImports(imports) {
  let str = '';

  for (const vars in imports) {
    str += `import ${vars} from ${JSON.stringify(imports[vars])};\n`;
  }

  return str;
};

exports.createComponents = function createComponents(metadata) {
  let code = '';
  for (const hash in metadata) {
    const content = metadata[hash].content;
    code += `examples.set(${JSON.stringify(hash)}, {
      element: (<div>${content}</div>),\n
      code: ${JSON.stringify(content)}
    });`
  }

  return code;
};

exports.createSyntaxHighlightImports = function createSyntaxHighlightImports(supportedLanguages) {
  let str = '';

  const importsLoaderPath = require.resolve('imports-loader');
  const prismPath = require.resolve('prismjs');
  
  for (const language of supportedLanguages) {
    str += `import '!!${importsLoaderPath}?Prism=${prismPath}!prismjs/components/prism-${language}';`;
  }

  return str;
};
