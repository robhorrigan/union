const xml = require('xml2js');
const loaderUtils = require('loader-utils');

const xmlBuilder = new xml.Builder();

module.exports = function (source) {
  this.cacheable();
  const stamp = loaderUtils.interpolateName(this, '[hash:3]', { content: source });

  const options = loaderUtils.getOptions(this) || {};

  const resultPrefix = options.exportsResult === true ? 'module.exports = ' : '';

  if (options.onlyStamp) {
    return `${resultPrefix}${JSON.stringify(stamp)}`;
  }

  const callback = this.async();
  xml.parseString(source, (err, result) => {
    if (err) {
      callback(err);
    }

    result.svg.defs[0].symbol.forEach((symbol) => {
      symbol.$.id += `-${stamp}`;
    });

    callback(null, `${resultPrefix}${JSON.stringify(xmlBuilder.buildObject(result))}`);
  });
}
