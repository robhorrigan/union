import React from 'react';
import PropTypes from 'prop-types';
import MobileHeaderNav from './components/mobile/HeaderNav';
import DesktopHeaderNav from './components/desktop/HeaderNav';


export default function HeaderNav(props) {
  return (
    <div>
      <DesktopHeaderNav {...props} />
      <MobileHeaderNav {...props} />
    </div>
  );
}

HeaderNav.propTypes = {
  /**
   * Whether or not to render the logged in version
   **/
  loggedIn: PropTypes.bool
};
