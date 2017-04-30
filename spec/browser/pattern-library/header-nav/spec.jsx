import React from 'react';
import { mount } from 'enzyme';
import HeaderNav from '@xo-union/header-nav/src/index';
import { Tools } from '@xo-union/header-nav/src/components/MenuFactories';

describe('<HeaderNav>', () => {
  describe('props.loggedIn', () => {
    it('does not render the account ctas', () => {
      const subject = mount(<HeaderNav loggedIn />);
      expect(subject.text()).not.toContain('SIGN UP');
      expect(subject.text()).not.toContain('LOG IN');
    });

    it('renders the Log Out button', () => {
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

    it('passes the loggedIn value to the tools nav item', () => {
      const subject = mount(<HeaderNav loggedIn={false} />);
      const toolsNavItem = subject.find(Tools);
      expect(toolsNavItem.props().loggedIn).toBe(false);
    });
  });

  describe('props.onNavigate', () => {
    it('is triggered when a navigation item is clicked', () => {
      const onNavigateSpy = jasmine.createSpy('onNavigate');
      const subject = mount(<HeaderNav onNavigate={onNavigateSpy} />);
      const navigationItem = subject.find('[data-click-role="navigate"]');
      navigationItem.at(0).simulate('click');

      expect(onNavigateSpy).toHaveBeenCalled();
    });
  });

  describe('props.onLogOut', () => {
    it('is triggered when the log out item is clicked', () => {
      const onLogOutSpy = jasmine.createSpy('onLogOut');
      const subject = mount(<HeaderNav loggedIn onLogOut={onLogOutSpy} />);
      const logOutItem = subject.find('[data-click-role="log-out"]');
      logOutItem.simulate('click');

      expect(onLogOutSpy).toHaveBeenCalled();
    });
  });

  describe('props.onLogIn', () => {
    it('is triggered when the log in item is clicked', () => {
      const onLogInSpy = jasmine.createSpy('onLogIn');
      const subject = mount(<HeaderNav onLogIn={onLogInSpy} />);
      const logInItem = subject.find('[data-click-role="log-in"]');
      logInItem.at(0).simulate('click');

      expect(onLogInSpy).toHaveBeenCalled();
    });
  });

  describe('props.onSignUp', () => {
    it('is triggered when the sign up item is clicked', () => {
      const onSignUpSpy = jasmine.createSpy('onSignUp');
      const subject = mount(<HeaderNav onSignUp={onSignUpSpy} />);
      const signUpItem = subject.find('[data-click-role="sign-up"]');
      signUpItem.at(0).simulate('click');

      expect(onSignUpSpy).toHaveBeenCalled();
    });
  });
});
