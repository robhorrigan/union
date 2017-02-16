import React from 'react';
import generateRoutes from '#docs/components/Routes/generateRoutes';

describe('<Routes>', () => {
  describe('.generateRoutes', () => {
    class ArticleMock {
      constructor(id) {
        this.id = id;
      }

      permalink() { return `/${this.id}`; }
      component() {
        const component = () => <div />;
        // attach id to facilitate testing
        component.id = this.id;
        return component;
      }
    }

    const articleMocks = [
      new ArticleMock(1),
      new ArticleMock(2),
      new ArticleMock(3)
    ];

    it('generates routes with the right keys', () => {
      const routes = generateRoutes(articleMocks);

      expect(routes[0].key).toBe('1');
      expect(routes[1].key).toBe('2');
      expect(routes[2].key).toBe('3');
    });

    it('generates routes with the right paths', () => {
      const routes = generateRoutes(articleMocks);

      expect(routes[0].props.path).toBe('/1');
      expect(routes[1].props.path).toBe('/2');
      expect(routes[2].props.path).toBe('/3');
    });

    it('generates routes with the right component', () => {
      const routes = generateRoutes(articleMocks);

      expect(routes[0].props.component.id).toBe(1);
      expect(routes[1].props.component.id).toBe(2);
      expect(routes[2].props.component.id).toBe(3);
    });
  });
});
