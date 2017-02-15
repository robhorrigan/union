const pathinfo = require('./pathinfo');

const stringify = JSON.stringify;

function jsFileObject(pathInfoObject) {
  return `{
    module: require(${stringify(pathInfoObject.absolutePath)}),
    pathinfo: ${pathinfo.stringify(pathInfoObject)}
  }`;
}

module.exports = function build(pathinfoObjects) {
  const initialJS = 'var meta = { files: [] };\n';

  const js = pathinfoObjects.reduce((jsCode, pathInfoObject) =>
    `${jsCode}meta.files.push(${jsFileObject(pathInfoObject)});\n`
  , initialJS);

  return `${js}module.exports = meta;`;
};
