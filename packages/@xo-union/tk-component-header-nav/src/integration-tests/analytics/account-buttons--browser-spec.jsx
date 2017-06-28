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
    describe('account buttons', () => {
      let subject;

      beforeEach(() => {
        subject = mount(
          <HeaderNav analyticsProps={analyticsProps} />
        );
      });

      it('triggers the correct analytics call for main menu sign-up button', () => {
        const signUpButton = subject.find('MainMenuItem SignUpButton button').at(1);

        signUpButton.simulate('click');

        expect(analyticsMock.track).toHaveBeenCalledWith('Menu Interaction', {
          selection: 'sign up',
          product: 'fashion',
          platform: 'web'
        });
      });

      it('triggers the correct analytics call for main menu log-in button', () => {
        const logInButton = subject.find('MainMenuItem LogInButton button').at(1);
        logInButton.simulate('click');

        expect(analyticsMock.track).toHaveBeenCalledWith('Menu Interaction', {
          selection: 'log in',
          product: 'fashion',
          platform: 'web'
        });
      });

      it('triggers the correct analytics call for the tools sign-up button', () => {
        const logInButton = subject.find('SubMenu SignUpButton button');
        logInButton.simulate('click');

        expect(analyticsMock.track).toHaveBeenCalledWith('Menu Interaction', {
          selection: 'tools > sign up',
          product: 'fashion',
          platform: 'web'
        });
      });

      it('triggers the correct analytics call for the tools log-in button', () => {
        const logInButton = subject.find('SubMenu LogInButton button');
        logInButton.simulate('click');

        expect(analyticsMock.track).toHaveBeenCalledWith('Menu Interaction', {
          selection: 'tools > log in here',
          product: 'fashion',
          platform: 'web'
        });
      });
    });
  });
});
