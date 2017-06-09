import React from 'react';
import ActualHeaderNav from '@xo-union/tk-component-header-nav';
import PropTypes from 'prop-types';

// Name HeaderNav to preserve display name -- This is necessary for demos
export default function HeaderNav({ analyticsProps, ...props }) {
  /* eslint-disable no-console*/
  return (
    <ActualHeaderNav
      analyticsProps={{
        followStrategy: false,
        analytics: { track: ::console.log },
        ...analyticsProps
      }}
      {...props}
    />
  );
}

HeaderNav.propTypes = {
  analyticsProps: PropTypes.shape({
    product: PropTypes.string.isRequired
  }).isRequired
};
