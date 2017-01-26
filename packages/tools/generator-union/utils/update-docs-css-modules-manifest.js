
module.exports = function updateDocsCssModulesManifest(generator) {
  const externalCssModulesPath = generator.packagesPath('docs', 'external-cssmodules.json');
  const { cssModulePackageName } = generator._collectedData();

  const modulesJSON = generator.fs.readJSON(externalCssModulesPath, { modules: [] });

  modulesJSON.modules.push(cssModulePackageName);

  generator.fs.writeJSON(externalCssModulesPath, modulesJSON);
}
