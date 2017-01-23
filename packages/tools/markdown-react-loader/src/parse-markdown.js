const except = require('except');
const frontMatter = require('front-matter');

// https://regex101.com/r/gkfbY5/1
const RENDER_PATTERN = /```render (\w+)\n(\n*(?:(?!```).+\n+)+)```/g;

module.exports = function parseMarkdown(markdown, createIdentifier) {
  const { body, attributes } = frontMatter(markdown);
  const { imports } = attributes;
  const frontMatterAttributes = except(attributes, 'imports');

  const metadata = { };

  const taggedMarkdown = body.replace(RENDER_PATTERN, (renderMarkdown, language, content) => {
    const codeHash = createIdentifier(content, language);
    metadata[codeHash] = { language, content };

    return `
\`\`\`${language}
${codeHash}
\`\`\`
`;
  });

  return {
    metadata,
    imports,
    taggedMarkdown,
    frontMatterAttributes
  };
}

