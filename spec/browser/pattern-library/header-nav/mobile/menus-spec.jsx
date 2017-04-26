import React from 'react';
import { PrimaryMenu } from '#/header-nav/components/mobile/menus';
import { mount } from 'enzyme';

describe('<PrimaryMenu>', () => {
  describe('default view', () => {
    const subject = mount(<PrimaryMenu />);
    const subMenuLinks = subject.find('SubMenuLink');

    it('renders a SubMenu', () => {
      expect(subject.find('SubMenu').length).toBe(1);
    });

    it('renders the top level components', () => {
      expect(subMenuLinks.at(0).text()).toBe('Local Vendors');
      expect(subMenuLinks.at(1).text()).toBe('Wedding Websites');
      expect(subMenuLinks.at(2).text()).toBe('Registry');
      expect(subMenuLinks.at(3).text()).toBe('Rings + Dresses');
      expect(subMenuLinks.at(4).text()).toBe('Photos');
      expect(subMenuLinks.at(5).text()).toBe('Ideas & Advice');
      expect(subMenuLinks.at(6).text()).toBe('Shop');
    });

    it('renders additional miscellaneous items', () => {
      expect(subMenuLinks.at(7).text()).toBe('Customer Service');
      expect(subMenuLinks.at(8).text()).toBe('Send Feedback');
      expect(subMenuLinks.at(9).text()).toBe('Privacy Policy');
      expect(subMenuLinks.at(10).text()).toBe('Terms of Use');
      expect(subMenuLinks.at(11).text()).toBe('Account Settings');
    });

    it('renders the ClosedPrimaryMenu', () => {
      expect(subject.find('ClosedPrimaryMenu').length).toBe(1);
    });
  });

  describe('open view', () => {
    function text() {
      return this.text().trim();
    }

    it('opens a sub menu', () => {
      const subject = mount(<PrimaryMenu />);
      const subMenuLinks = subject.find('SubMenuLink');
      subMenuLinks.at(0).find('a').simulate('click');

      const newSubMenuLinks = subject.find('SubMenuLink');

      expect(newSubMenuLinks.at(0)::text()).toBe('Local Vendors');
      expect(newSubMenuLinks.at(1)::text()).toBe('Reception Venues');
      expect(newSubMenuLinks.at(2)::text()).toBe('Wedding Photographers');
      expect(newSubMenuLinks.at(3)::text()).toBe('Bridal Salons');
      expect(newSubMenuLinks.at(4)::text()).toBe('DJs');
      expect(newSubMenuLinks.at(5)::text()).toBe('Florists');
      expect(newSubMenuLinks.at(6)::text()).toBe('Wedding Planners');
      expect(newSubMenuLinks.at(7)::text()).toBe('Jewelers');
      expect(newSubMenuLinks.at(8)::text()).toBe('Beauty');
      expect(newSubMenuLinks.at(9)::text()).toBe('Videographers');
      expect(newSubMenuLinks.at(10)::text()).toBe('Wedding Bands');
      expect(newSubMenuLinks.at(11)::text()).toBe('See All');
    });

    describe('clicking on the back button', () => {
      it('goes back to the closed state', () => {
        const subject = mount(<PrimaryMenu />);
        const subMenuLinks = subject.find('SubMenuLink');
        subMenuLinks.at(0).find('a').simulate('click');

        const newSubMenuLinks = subject.find('SubMenuLink');
        newSubMenuLinks.at(0).find('a').simulate('click');

        expect(subject.find('ClosedPrimaryMenu').length).toBe(1);
      });
    });
  });
});
