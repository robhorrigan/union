module.exports = function writeDocumentationFiles(generator) {
  const collectedData = generator._collectedData();

  if (collectedData.wantsToCreateNewPage) {
    generator.fs.copyTpl(
      generator.templatePath('documentation.md'),
      generator.packagesPath('docs', 'articles', collectedData.pagePath),
      collectedData
    );
  }
}

