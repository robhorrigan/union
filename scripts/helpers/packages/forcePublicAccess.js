const spawn = require('../spawn');

module.exports = function forcePublicAccess({ scope }) {
  return spawn('lerna', [
    'exec',
    '--scope',
    scope,
    '--',
    'npm',
    'access',
    'public'
  ]);
};
