import React from 'react';
import { Provider } from 'mobx-react';
import { mount } from 'enzyme';
import SubNavWithGroups from './';
import seed from './spec/content-patterns-seed.json';

const articlesMock = seed.map(name => ({
  title() { return name; },
  fullPath() { return '/'; }
}));

describe('<SubNavWithGroups>', () => {
  const defaultRouterMock = { inPath() { return false; } };

  it('creates 7 columns', () => {
    const togglerMock = new Set();
    const subject = mount(
      <Provider router={defaultRouterMock}>
        <SubNavWithGroups toggler={togglerMock} items={articlesMock} numberOfGroups={7} />
      </Provider>
    );

    const groups = subject.find('[role="group"]');

    expect(groups.length).toBe(7);
  });

  it('distributes items evenly between the 7 columns', () => {
    const togglerMock = new Set();
    const subject = mount(
      <Provider router={defaultRouterMock}>
        <SubNavWithGroups toggler={togglerMock} items={articlesMock} numberOfGroups={7} />
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
