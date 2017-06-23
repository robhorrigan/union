import GithubStore from './';

describe('GithubStore', () => {
  describe('#hydrate', () => {
    describe('tagged releases', () => {
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
          expect(subject.packageReleases['@xo-union/tk-css-icons'].slice()).toEqual([
            { name: 'something', body: 'Test', tagName: '@xo-union/tk-css-icons@1.2.3', version: '1.2.3' }
          ]);

          expect(subject.packageReleases['@xo-union/tk-component-buttons'].slice()).toEqual([
            { name: 'something', body: 'Test', tagName: '@xo-union/tk-component-buttons@1.2.2', version: '1.2.2' }
          ]);
        }).catch(fail).then(done);
      });
    });
  });
});
