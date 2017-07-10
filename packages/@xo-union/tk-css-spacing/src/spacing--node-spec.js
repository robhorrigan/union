import spacing from '@xo-union/tk-css-spacing';
import createHash from 'sha.js';

describe('spacing module', () => {
  it('generates the expected css', () => {
    const spacingString = spacing.toString();
    const sha256 = createHash('sha256');
    const shaString = sha256.update(spacingString, 'utf8').digest('hex');

    expect(shaString).toBe('90e1cf1930fcec308b22d633f8bc6bf828a38cb69c3afd79043ebb903bcaf87d');
  });
});
