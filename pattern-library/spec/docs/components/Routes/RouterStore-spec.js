import RouterStore from '#docs/components/Routes/RouterStore';

describe('RouterStore', () => {
  describe('.paths', () => {
    it('returns a list of all the defined paths', () => {
      const store = new RouterStore();
      store.routes = [
        {
          path: '/',
          childRoutes: [
            { path: 'test-1' },
            { path: 'test-2'}
          ]
        }
      ]

      expect(store.paths).toEqual([
        '/',
        '/test-1',
        '/test-2'
      ]);
    });
  });
});
