import React from 'react';
import { mount } from 'enzyme';
import HeaderNav from './';
import { Tools } from '../menuFactories';

const analyticsProps = {
  analytics: { track: () => { } },
  followStrategy: false,
  product: 'fashion'
};

describe('<HeaderNav>', () => {
  describe('props.loggedIn', () => {
    it('does not render the account ctas', () => {
      const subject = mount(<HeaderNav loggedIn analyticsProps={analyticsProps} />);
      expect(subject.text()).not.toContain('SIGN UP');
      expect(subject.text()).not.toContain('LOG IN');
    });

    it('renders the Log Out button', () => {
      const subject = mount(<HeaderNav loggedIn analyticsProps={analyticsProps} />);
      expect(subject.text()).toContain('Log Out');
    });
  });

  describe('logged out', () => {
    it('does not render the account ctas', () => {
      const subject = mount(<HeaderNav loggedIn={false} analyticsProps={analyticsProps} />);
      expect(subject.text()).toContain('Sign up');
      expect(subject.text()).toContain('Log in');
    });

    it('does not render to Log Out button', () => {
      const subject = mount(<HeaderNav loggedIn={false} analyticsProps={analyticsProps} />);
      expect(subject.text()).not.toContain('Log Out');
    });

    it('passes the loggedIn value to the tools nav item', () => {
      const subject = mount(<HeaderNav loggedIn={false} analyticsProps={analyticsProps} />);
      const toolsNavItem = subject.find(Tools);
      expect(toolsNavItem.props().loggedIn).toBe(false);
    });
  });

  describe('props.onNavigate', () => {
    it('is triggered when a navigation item is clicked', () => {
      const onNavigateSpy = jasmine.createSpy('onNavigate');
      const subject = mount(
        <HeaderNav onNavigate={onNavigateSpy} analyticsProps={analyticsProps} />
      );
      const navigationItem = subject.find('[data-click-role="navigate"]');
      navigationItem.at(0).simulate('click');

      expect(onNavigateSpy).toHaveBeenCalled();
    });
  });

  describe('props.onLogOut', () => {
    it('is triggered when the log out item is clicked', () => {
      const onLogOutSpy = jasmine.createSpy('onLogOut');
      const subject = mount(
        <HeaderNav loggedIn onLogOut={onLogOutSpy} analyticsProps={analyticsProps} />
      );
      const logOutItem = subject.find('[data-click-role="log-out"]');
      logOutItem.simulate('click');

      expect(onLogOutSpy).toHaveBeenCalled();
    });
  });

  describe('props.onLogIn', () => {
    it('is triggered when the log in item is clicked', () => {
      const onLogInSpy = jasmine.createSpy('onLogIn');
      const subject = mount(<HeaderNav onLogIn={onLogInSpy} analyticsProps={analyticsProps} />);
      const logInItem = subject.find('[data-click-role="log-in"]');
      logInItem.at(0).simulate('click');

      expect(onLogInSpy).toHaveBeenCalled();
    });
  });

  describe('props.onSignUp', () => {
    it('is triggered when the sign up item is clicked', () => {
      const onSignUpSpy = jasmine.createSpy('onSignUp');
      const subject = mount(<HeaderNav onSignUp={onSignUpSpy} analyticsProps={analyticsProps} />);
      const signUpItem = subject.find('[data-click-role="sign-up"]');
      signUpItem.at(0).simulate('click');

      expect(onSignUpSpy).toHaveBeenCalled();
    });
  });
});
