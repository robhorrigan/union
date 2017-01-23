const glob = require('glob-all');
const pathinfo = require('./pathinfo');

function readdir(globs, options = {}) {
  return new Promise((resolve, reject) => {
    glob(globs, options, (err, paths) => {
      if(err) {
        return reject(err);
      }

      resolve(paths);
    });
  });
}

exports.readdir = readdir;
exports.readdirInfo = function readdirInfo(globs, options = {}) {
  const { cwd } = options;

  return readdir(globs, options).then(paths => {
    return paths.map(path => pathinfo(path, cwd));
  });
};
