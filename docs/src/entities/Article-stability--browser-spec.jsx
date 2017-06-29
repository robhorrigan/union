import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'mobx-react';
import GithubStore from '@stores/GithubStore';
import Article from './Article';

describe('Article', () => {
  Article.all.forEach((article) => {
    describe(article.path(), () => {
      it('renders', () => {
        const githubStore = new GithubStore();
        const Component = article.component();
        mount(
          <Provider github={githubStore}>
            <Component />
          </Provider>
        );
      });
    });
  });
});
