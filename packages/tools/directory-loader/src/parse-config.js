const path = require('path');

module.exports = function parseConfig(config, sourcePath) {
  const root = path.resolve(path.dirname(sourcePath), config.files.root);
  const globs = config.files.globs;

  return { globs, root };
};

