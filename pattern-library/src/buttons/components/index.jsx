import React, { PropTypes } from 'react';
import styles from '@xo-union/buttons/css'

export default function Buttons({
  text,
  fitted,
  size = 'papa',
  color = 'primary'
}) {
  let classList = `${styles.btn} ${styles[size]} ${styles[color]}`;

  if (fitted) {
    classList += ` ${styles[`${size}-${fitted}-fitted`]}`;
  }

  return <button className={classList}>{text}</button>;
}

Buttons.propTypes = {
  /**
   * Button text
   **/
  text: PropTypes.string.isRequired,
  /**
   * Breakpoint where button becomes fitted
   **/
  fitted: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /**
   * Color class
   **/
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /**
   * Size class
   **/
  size: PropTypes.oneOf(['baby', 'mama', 'papa'])
};

