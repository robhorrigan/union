import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import MobileHeaderNav from '../mobile/HeaderNav';
import DesktopHeaderNav from '../desktop/HeaderNav';
import TrackableLinks from '@xo-union/tk-component-analytics/lib/trackable-links';

const NOOP = () => { };

class OnlyHeaderNav extends Component {
  static defaultProps = {
    onNavigate: NOOP,
    onSignUp: NOOP,
    onLogIn: NOOP,
    onLogOut: NOOP,
    loggedIn: false
  }

  getRestOfProps() {
    const {
      onNavigate,
      onSignUp,
      onLogIn,
      onLogOut,
      loggedIn,
      product,
      ...newProps
    } = this.props;

    return newProps;
  }

  @autobind
  handleClick(event) {
    const { clickRole } = event.target.dataset;
    const { onNavigate, onSignUp, onLogOut, onLogIn } = this.props;

    if (clickRole === 'navigate') {
      onNavigate(event);
    }

    if (clickRole === 'log-in') {
      onLogIn(event);
    }

    if (clickRole === 'log-out') {
      onLogOut(event);
    }

    if (clickRole === 'sign-up') {
      onSignUp(event);
    }
  }

  render() {
    const { loggedIn } = this.props;

    return (
      <div onClick={this.handleClick} {...this.getRestOfProps()}>
        <DesktopHeaderNav loggedIn={loggedIn} />
        <MobileHeaderNav loggedIn={loggedIn} />
      </div>
    );
  }
}

export default class HeaderNav extends Component {
  render() {
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    const { analyticsProps = {}, ...headerNavProps } = this.props;

    return (
      <TrackableLinks eventName="Menu Interaction" {...analyticsProps}>
        <OnlyHeaderNav {...headerNavProps} />
      </TrackableLinks>
    );
  }
}


HeaderNav.propTypes = {
  /**
   * Whether or not to render the logged in version
   **/
  loggedIn: PropTypes.bool,
  /**
   * Callback for navigation clicks
   */
  onNavigate: PropTypes.func,
  /**
   * Callback for clicking log in CTA
   */
  onLogIn: PropTypes.func,
  /**
   * Callback for clicking sign up CTA
   */
  onSignUp: PropTypes.func,
  /**
   * Callback for clicking log out menu item
   */
  onLogOut: PropTypes.func,
  /**
   * Props for analytics component. See @xo-union/tk-component-analytics/lib/trackable-links
   */
  analyticsProps: PropTypes.shape({
    product: PropTypes.string.isRequired
  }).isRequired
};
