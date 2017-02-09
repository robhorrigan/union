const path = require('path');

function pathinfoStringifier(key, value) {
  // Do not stringify absolute path
  if (key === 'absolutePath') return undefined;

  return value;
}

module.exports = function pathinfo(relativePath, basePath) {
  const absolutePath = path.resolve(basePath, relativePath);
  const absolutePathMeta = path.parse(absolutePath);

  const { name, ext, dir } = absolutePathMeta;

  const relativeDir = path.relative(basePath, dir);
  const relativeName = path.join(relativeDir, name);

  return {
    ext,
    name,
    relativeName,
    absolutePath
  };
};

module.exports.stringify = function stringify(pathinfo) {
  return JSON.stringify(pathinfo, pathinfoStringifier);
};
