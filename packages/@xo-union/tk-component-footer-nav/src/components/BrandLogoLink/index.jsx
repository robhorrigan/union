import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@xo-union/tk-component-icons';
import styles from '@xo-union/tk-component-footer-nav/lib/css';
import { NewWindowAnchor } from '@xo-union/component-standard-elements/lib/anchor';

export default function BrandLogoLink({ 
  href,
  name,
  ...props
}) {
  return (
    <NewWindowAnchor href={href} className={styles['nav-link-with-icon']} {...props}>
      <Icon name={name} className={styles[name]} />
    </NewWindowAnchor>
  );
}

BrandLogoLink.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
