const xml = require('xml2js');
const loaderUtils = require('loader-utils');

const xmlBuilder = new xml.Builder();

function createHash(source) {
  const loaderStub = { resourcePath: '' };
  return loaderUtils.interpolateName(loaderStub, '[hash:3]', { content: source });
}

function newModuleCode(exportedValue, { exportsResult }) {
  if (exportsResult) {
    return `module.exports = ${JSON.stringify(exportedValue)};`;
  }

  return exportedValue;
}

function eachSymbolAttribute({ svg }, callback) {
  svg.defs[0].symbol.forEach(callback);
}

module.exports = function iconLoader(source) {
  this.cacheable();
  const callback = this.async();
  const stamp = createHash(source);

  const options = loaderUtils.getOptions(this) || {};

  if (options.onlyStamp) {
    callback(null, newModuleCode(stamp, options));
    return;
  }

  xml.parseString(source, (err, result) => {
    if (err) {
      callback(err);
    }

    eachSymbolAttribute(result, ({ $ }) => {
      // eslint-disable-next-line no-param-reassign
      $.id += `-${stamp}`;
    });

    const transformedXML = xmlBuilder.buildObject(result);
    callback(null, newModuleCode(transformedXML, options));
  });
};
