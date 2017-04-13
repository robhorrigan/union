const loaderUtils = require('loader-utils');

module.exports = function (source) {
  this.cacheable();
  const not = (loaderUtils.getOptions(this) || {}).not;
  const condition = not ? '!==' : '===';

  return `
  if (ENV ${condition} "production") {
    ${source}
  }
`;
}
