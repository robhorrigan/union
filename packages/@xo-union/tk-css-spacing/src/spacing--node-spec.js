import spacing from '@xo-union/tk-css-spacing';
import createHash from 'sha.js';

describe('spacing module', () => {
  it('generates the expected css', () => {
    const spacingString = spacing.toString();
    const sha256 = createHash('sha256');
    const shaString = sha256.update(spacingString, 'utf8').digest('hex');

    expect(shaString).toBe('ac949c3290ebba568010be29ddedb2e63f8be28cd47b72b8435d5035c1126819');
  });
});
