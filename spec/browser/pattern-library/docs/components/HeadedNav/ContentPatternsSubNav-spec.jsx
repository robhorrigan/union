import React from 'react';
import { Provider } from 'mobx-react';
import { mount } from 'enzyme';
import ContentPatternsSubNav from '#docs/components/HeaderNav/ContentPatternsSubNav';
import seed from './content-patterns-seed.json';

const articlesMock = seed.map(name => ({
  title() { return name; },
  permalink() { return '/'; }
}));

describe('<ContentPatternsSubNav', () => {
  const defaultRouterMock = { inPath() { return false; } };

  it('creates 7 columns', () => {
    const togglerMock = new Set();
    const subject = mount(
      <Provider router={defaultRouterMock}>
        <ContentPatternsSubNav toggler={togglerMock} contentPatternArticles={articlesMock} />
      </Provider>
    );

    const groups = subject.find('[role="group"]');
    expect(groups.length).toBe(7);
  });

  it('distributes items evenly between the 7 columns', () => {
    const togglerMock = new Set();
    const subject = mount(
      <Provider router={defaultRouterMock}>
        <ContentPatternsSubNav toggler={togglerMock} contentPatternArticles={articlesMock} />
      </Provider>
    );

    const groups = subject.find('[role="group"]');
    const numberOfMenuItemsPerGroup = groups.map(group =>
      group.find('[role="menuitem"]').length
    );

    const expectedLayout = [8, 8, 8, 8, 8, 8, 6];
    expect(numberOfMenuItemsPerGroup).toEqual(expectedLayout);
  });
});
