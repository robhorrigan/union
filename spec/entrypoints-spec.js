const path = require('path');
const {
  getEntrypointsFiles,
  adaptEntrypoints
} = require('../build-utils/entrypoints');

const fixturesPath = path.resolve.bind(null, __dirname, 'fixtures');

describe('entrypoints', () => {
  describe('.getEntrypointsFiles', () => {
    it('gets all entrypoint manifest files in a directory', () => {
      const where = fixturesPath('entrypoints');
      const result = getEntrypointsFiles({ where });

      expect(result).toContain(fixturesPath('entrypoints', 'a', '.entrypoints.json'));
      expect(result).toContain(fixturesPath('entrypoints', 'b', '.entrypoints.json'));
    });
  });

  describe('.adaptEntrypoints', () => {
    it('creates a mapping from module to package', () => {
      const result = adaptEntrypoints([
        fixturesPath('entrypoints', 'a', '.entrypoints.json')
      ], { relativeTo: fixturesPath() });

      expect(result['entrypoints/a/1.js']).toEqual('./entrypoints/a/1.js');
      expect(result['entrypoints/a/2.cssm']).toEqual('./entrypoints/a/2.scss');
      expect(result['entrypoints/a/3.js']).toEqual('./entrypoints/a/3.jsx');
      expect(result['entrypoints/a/4.cssm']).toEqual('./entrypoints/a/4.css');
    });
  });
});
