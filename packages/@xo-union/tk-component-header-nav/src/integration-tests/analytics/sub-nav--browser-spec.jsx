import React from 'react';
import { mount } from 'enzyme';
import { SubNav, SubNavLinkItem } from '../../';

describe('SubNav analytics', () => {
  describe('When clicking on SubNav link', () => {
    let analyticsMock;
    let analyticsProps;
    let subject;
    let subNavLinks;

    beforeEach(() => {
      analyticsMock = { track: jasmine.createSpy('track') };
      analyticsProps = { product: 'fashion', analytics: analyticsMock, followStrategy: false };
      subject = mount(
        <SubNav analyticsProps={analyticsProps}>
          <SubNavLinkItem href="//www.theknot.com">
            Sub Nav Link Item
          </SubNavLinkItem>
          <SubNavLinkItem href="//www.theknot.com" data-trackable-selection="New selection">
            Sub Nav Link Item
          </SubNavLinkItem>
        </SubNav>
      );

      subNavLinks = subject.find('SubNavLinkItem a');
    });

    it('makes correct analytics call when no data-trackable-selection is passed', () => {
      subNavLinks.at(0).simulate('click');

      expect(analyticsMock.track).toHaveBeenCalledWith('Menu Interaction', {
        selection: 'Sub Nav Link Item',
        product: 'fashion',
        platform: 'web',
        userDecisionArea: 'sub nav',
        selectionURL: 'http://www.theknot.com/'
      });
    });

    it('makes correct analytics call when data-trackable-selection is passed', () => {
      subNavLinks.at(1).simulate('click');

      expect(analyticsMock.track).toHaveBeenCalledWith('Menu Interaction', {
        selection: 'New selection',
        product: 'fashion',
        platform: 'web',
        userDecisionArea: 'sub nav',
        selectionURL: 'http://www.theknot.com/'
      });
    });
  });
});
