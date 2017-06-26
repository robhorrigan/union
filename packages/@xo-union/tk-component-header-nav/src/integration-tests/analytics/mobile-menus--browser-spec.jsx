import React from 'react';
import { mount } from 'enzyme';
import HeaderNav from '../../';

describe('<HeaderNav>', () => {
  let analyticsMock;
  let analyticsProps;

  beforeEach(() => {
    analyticsMock = { track: jasmine.createSpy('track') };
    analyticsProps = { product: 'fashion', analytics: analyticsMock, followStrategy: false };
  });

  describe('desktop', () => {
    describe('buttons that toggle sub-menus', () => {
      let subject;

      beforeEach(() => {
        subject = mount(
          <HeaderNav analyticsProps={analyticsProps} />
        );
      });

      it('triggers the correct analytics call for the tools sub menu', () => {
        const toolsButton = subject.find('ToolsMenuButton button');

        toolsButton.simulate('click');

        expect(analyticsMock.track).toHaveBeenCalledWith('Menu Interaction', {
          selection: 'opened tools menu',
          product: 'fashion',
          platform: 'web'
        });

        analyticsMock.track.calls.reset();

        toolsButton.simulate('click');

        expect(analyticsMock.track).toHaveBeenCalledWith('Menu Interaction', {
          selection: 'closed tools menu',
          product: 'fashion',
          platform: 'web'
        });
      });

      it('triggers the correct analytics call for the hamburger sub menu', () => {
        const primaryButton = subject.find('PrimaryMenuButton button');

        primaryButton.simulate('click');

        expect(analyticsMock.track).toHaveBeenCalledWith('Menu Interaction', {
          selection: 'opened primary menu',
          product: 'fashion',
          platform: 'web'
        });

        analyticsMock.track.calls.reset();

        primaryButton.simulate('click');

        expect(analyticsMock.track).toHaveBeenCalledWith('Menu Interaction', {
          selection: 'closed primary menu',
          product: 'fashion',
          platform: 'web'
        });
      });
    });
  });
});
