import { normalizePath } from '#docs/utils/paths';

describe('.normalizePath', () => {
  it('removes extra slashes', () => {
    expect(normalizePath('/a/', 'b', '//c')).toBe('/a/b/c');
  });
});
