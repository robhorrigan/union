const { readdirInfo } = require('./src/readdir');
const parseConfig = require('./src/parse-config');
const buildJS = require('./src/js-builder');

module.exports = function directoryLoader(source) {
  this.cacheable();

  const failure = this.async();
  const success = failure.bind(null, null);

  const config = this.exec(source, this.resourcePath);
  const filesConfig = parseConfig(config, this.resourcePath);

  /* Allow hot module reloading when new files are added */
  this.addContextDependency(filesConfig.root);

  readdirInfo(filesConfig.globs, { cwd: filesConfig.root })
    .then(pathinfoObjects => buildJS(pathinfoObjects))
    .then(success)
    .catch(failure);
};
