import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/tk-component-footer-nav/lib/css';
import { NewWindowAnchor } from '@xo-union/component-standard-elements/lib/anchor';
import Icon from '@xo-union/tk-component-icons';

export default function SocialIconItem({
  name,
  href = `https://www.${name}.com/theknot`,
  ...props
}) {
  return (
    <li className={styles['social-nav-item']}>
      <NewWindowAnchor href={href} className={styles['social-icon-container']} {...props}>
        <Icon name={`social-${name}`} className={styles['centered-icon']} />
      </NewWindowAnchor>
    </li>
  );
}

SocialIconItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string
};
