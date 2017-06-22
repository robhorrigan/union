import GithubStore from './';

describe('GithubStore', () => {
  describe('#hydrate', () => {
    describe('systemReleases', () => {
      it('hydrates the data from Github', (done) => {
        const fetchMock = (url) => Promise.resolve({
          json() {
            return [{ name: '*', body: 'Test', tag_name: '123' }];
          }
        });

        const subject = new GithubStore({ fetch: fetchMock });
        subject.hydrate().then(() => {
          expect(subject.systemReleases).toEqual([{ name: '*', body: 'Test', tag_name: '123' }]);
        }).catch(fail).then(done);
      });
    });

    describe('taged releases', () => {
      it('hydrates the data from Github', (done) => {
        const fetchMock = (url) => Promise.resolve({
          json() {
            return [
              { name: 'something', body: 'Test', tag_name: '@xo-union/tk-css-icons@1.2.3' },
              { name: 'something', body: 'Test', tag_name: '@xo-union/tk-component-buttons@1.2.2' }
            ];
          }
        });

        const subject = new GithubStore({ fetch: fetchMock });
        subject.hydrate().then(() => {
          expect(subject.packageReleases['@xo-union/tk-css-icons']).toEqual([
            { name: 'something', body: 'Test', tag_name: '@xo-union/tk-css-icons@1.2.3', version: '1.2.3' }
          ]);

          expect(subject.packageReleases['@xo-union/tk-component-buttons']).toEqual([
            { name: 'something', body: 'Test', tag_name: '@xo-union/tk-component-buttons@1.2.2', version: '1.2.2' }
          ]);
        }).catch(fail).then(done);
      });
    });
  });
});
