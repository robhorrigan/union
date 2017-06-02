import React from 'react';
import { mount } from 'enzyme';
import Article from './Article';

describe('Article', () => {
  Article.all.forEach((article) => {
    describe(article.path(), () => {
      it('renders', () => {
        const Component = article.component();
        mount(<Component />);
      });
    });
  });
});
