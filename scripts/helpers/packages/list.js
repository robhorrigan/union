import { EOL } from 'os';
import spawn from '../spawn';

export default async function packageList() {
  const output = await spawn('lerna', ['ls']);
  return output
    .split(EOL)
    .slice(2) // ignore lerna's nonsense
    .map(packageName => packageName.split(/\s+/)[0]); // remove versions
};
