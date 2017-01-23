module.exports = function annouceNewPage(generator) {
  if (generator.answers.wantsToCreateNewPage) {
    const expectedPath = generator.answers.pagePath.replace(/\.[^.]+$/, '');

    generator.log('A new page has been created for this component');
    generator.log('  To see it, run `npm restart` at the root of the xogroup/union project');
    generator.log(`  Then visit http://localhost:8080/#/${expectedPath}`);
  }
};
