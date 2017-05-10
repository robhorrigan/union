import spawn from '../spawn';

export default function forcePublicAccess({ scope }) {
  return spawn('lerna', [
    'exec',
    '--scope',
    scope,
    '--',
    'npm',
    'access',
    'public'
  ]);
}
