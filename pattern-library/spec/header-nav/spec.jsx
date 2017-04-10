import React from 'react';
import { mount } from 'enzyme';
import HeaderNav from '#/header-nav';
import { NavLinkWithMenu, MenuLink } from '#/header-nav/components/NavItem';
import * as NavItems from '#/header-nav/components/NavItems';

describe('<HeaderNav>', () => {
  describe('logged in', () => {
    it('does not render the account ctas', () => {
      const subject = mount(<HeaderNav loggedIn />);
      expect(subject.text()).not.toContain('SIGN UP');
      expect(subject.text()).not.toContain('LOG IN');
    });

    it('renders to Log Out button', () => {
      const subject = mount(<HeaderNav loggedIn />);
      expect(subject.text()).toContain('Log Out');
    });
  });

  describe('logged out', () => {
    it('does not render the account ctas', () => {
      const subject = mount(<HeaderNav loggedIn={false} />);
      expect(subject.text()).toContain('SIGN UP');
      expect(subject.text()).toContain('LOG IN');
    });

    it('does not render to Log Out button', () => {
      const subject = mount(<HeaderNav loggedIn={false} />);
      expect(subject.text()).not.toContain('Log Out');
    });
  });

  it('passes the loggedIn value to the tools nav item', () => {
    const subject = mount(<HeaderNav loggedIn={false} />);
    const toolsNavItem = subject.find(NavItems.Tools);
    expect(toolsNavItem.props().loggedIn).toBe(false);
  });

  describe('NavItems', () => {
    describe('Shop', () => {
      it('renders the correct urls', () => {
        const subject = mount(<NavItems.Shop />);
        const menuLinks = subject.find(MenuLink);

        expect(subject.find(NavLinkWithMenu).props().url).toBe('https://shop.theknot.com?utm_source=theknot.com&utm_medium=referral&utm_campaign=topnav');
        expect(menuLinks.at(0).props().href).toBe('https://weddingshop.theknot.com/beauty');
        expect(menuLinks.at(1).props().href).toBe('https://weddingshop.theknot.com/gifts?utm_source=theknot.com&utm_medium=referral&utm_campaign=topnavsubcat');
        expect(menuLinks.at(2).props().href).toBe('https://weddingshop.theknot.com/favors/wedding-favors-by-feature?utm_source=theknot.com&utm_medium=referral&utm_campaign=topnavsubcat');
        expect(menuLinks.at(3).props().href).toBe('https://shop.theknot.com/stationery?category_id=200');
        expect(menuLinks.at(4).props().href).toBe('https://shop.theknot.com/dresses');
        expect(menuLinks.at(5).props().href).toBe('https://weddingshop.theknot.com/reception/personalized-paper-napkins?utm_source=theknot.com&utm_medium=referral&utm_campaign=topnavsubcat');
        expect(menuLinks.at(6).props().href).toBe('https://shop.theknot.com/post-wedding-essentials');
        expect(menuLinks.at(7).props().href).toBe('https://shop.theknot.com/stationery?category_id=201');
        expect(menuLinks.at(8).props().href).toBe('https://shop.theknot.com/accessories');
        expect(menuLinks.at(9).props().href).toBe('https://weddingshop.theknot.com/decor/wedding-table-decorations?utm_source=theknot.com&utm_medium=referral&utm_campaign=topnavsubcat');
        expect(menuLinks.at(10).props().href).toBe('https://shop.theknot.com/stationery?category_id=202');
        expect(menuLinks.at(11).props().href).toBe('https://shop.theknot.com');
      });
    })
  });
});
