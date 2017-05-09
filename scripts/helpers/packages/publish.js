import spawn from '../spawn';

export default function publish(packages) {
  const commaSeparatedPackages = packages.join(',');

  return spawn('lerna', [
    'publish',
    '--ignore',
    '*',
    '--force-publish',
    commaSeparatedPackages
  ], { stdio: 'inherit' });
}
