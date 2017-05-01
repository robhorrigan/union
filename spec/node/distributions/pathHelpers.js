import { resolve } from 'path';

// eslint-disable-next-line import/prefer-default-export
export const packagesPath = resolve.bind(null, __dirname, '..', '..', '..', 'packages');
