import React from 'react';
import { mount } from 'enzyme';
import * as MenuFactories from '#/header-nav/components/MenuFactories';
import { SubMenuLink } from '#/header-nav/components/SubMenu';

describe('MenuFactories', () => {
  describe('<Shop>', () => {
    it('renders the correct urls', () => {
      // eslint-disable-next-line react/prop-types
      const TestTemplate = ({ children }) => <ul>{children}</ul>;
      const subject = mount(<MenuFactories.Shop Template={TestTemplate} />);
      const menuLinks = subject.find(SubMenuLink);

      expect(subject.find(TestTemplate).props().href).toBe('https://shop.theknot.com?utm_source=theknot.com&utm_medium=referral&utm_campaign=topnav');
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
  });
});
