const spawn = require('./spawn');

module.exports = function publish(packages) {
  const commaSeparatedPackages = packages.join(',');

  return spawn('lerna', [
    'publish',
    '--ignore',
    '*',
    '--force-publish',
    commaSeparatedPackages
  ], { stdio: 'inherit' });
};
