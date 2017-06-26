import React from 'react';
import { mount } from 'enzyme';
import SubNav, { SubNavLinkItem } from './';

describe('<SubNav>', () => {
  it('renders the <SubNavLinkItem> children', () => {
    const subject = mount(
      <SubNav>
        <SubNavLinkItem href="/gs/wedding-websites">
          Wedding Website
        </SubNavLinkItem>
      </SubNav>
    );

    expect(subject.find(SubNavLinkItem).length).toBe(1);

    expect(subject.find('a[href="/gs/wedding-websites"]').length).toBe(1);
  });
});
