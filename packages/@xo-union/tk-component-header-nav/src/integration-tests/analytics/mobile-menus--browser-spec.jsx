import React from 'react';
import { mount } from 'enzyme';
import MobileHeaderNav from '../../components/mobile/HeaderNav';
import HeaderNavAnalytics from '../../analytics';

describe('<HeaderNavAnalytics>', () => {
  let analyticsMock;

  beforeEach(() => {
    analyticsMock = { track: jasmine.createSpy('track') };
  });

  describe('desktop', () => {
    describe('buttons that toggle sub-menus', () => {
      let subject;

      beforeEach(() => {
        subject = mount(
          <HeaderNavAnalytics product="fashion" analytics={analyticsMock} followStrategy={false}>
            <MobileHeaderNav />
          </HeaderNavAnalytics>
        );
      });

      it('triggers the correct analytics call for the tools sub menu', () => {
        const toolsButton = subject.find('ToolsMenuButton button');

        toolsButton.simulate('click');

        expect(analyticsMock.track).toHaveBeenCalledWith('Menu Interaction', {
          selection: 'Opened Tools Menu',
          product: 'fashion',
          platform: 'web'
        });

        analyticsMock.track.calls.reset();

        toolsButton.simulate('click');

        expect(analyticsMock.track).toHaveBeenCalledWith('Menu Interaction', {
          selection: 'Closed Tools Menu',
          product: 'fashion',
          platform: 'web'
        });
      });

      it('triggers the correct analytics call for the hamburger sub menu', () => {
        const primaryButton = subject.find('PrimaryMenuButton button');

        primaryButton.simulate('click');

        expect(analyticsMock.track).toHaveBeenCalledWith('Menu Interaction', {
          selection: 'Opened Primary Menu',
          product: 'fashion',
          platform: 'web'
        });

        analyticsMock.track.calls.reset();

        primaryButton.simulate('click');

        expect(analyticsMock.track).toHaveBeenCalledWith('Menu Interaction', {
          selection: 'Closed Primary Menu',
          product: 'fashion',
          platform: 'web'
        });
      });
    });
  });
});
