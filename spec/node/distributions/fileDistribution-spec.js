import getPackedFiles from './getPackedFiles';
import expectations from './distributionExpectations';
import { packagesPath } from './pathHelpers';

expectations.forEach(({ path, files }) => {
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const packageName = require(packagesPath(path, 'package.json')).name;

  describe(packageName, () => {
    it('packs the right files', (done) => {
      getPackedFiles(path)
      .then(({ packedFiles }) => {
        // Assume the package json is always there
        const filteredFiles = packedFiles.filter(f => f !== 'package.json');

        expect(files.sort()).toEqual(filteredFiles.sort());
      })
      .catch(fail)
      .then(done);
    });
  });
});
