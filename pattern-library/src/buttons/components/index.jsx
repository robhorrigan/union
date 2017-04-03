import React, { PropTypes } from 'react';
import styles from '@xo-union/buttons/css'


function processProps({ block, className, size = 'papa', color = 'primary', ...props }) {
  let classList = `${styles.btn} ${styles[size]} ${styles[color]} ${className}`;

  if (typeof block === 'string') {
    classList += ` ${styles[`block-${block}`]}`;
  } else if (block) {
    classList += ` ${styles.block}`;
  }

  return {
    className: classList,
    ...props
  }
}

export function Link(props) {
  return <a {...processProps(props)} />;
}

export function Button(props) {
  return <button {...processProps(props)} />;
}

Button.propTypes = {
  /**
   * Button text
   **/
  text: PropTypes.string.isRequired,
  /**
   * Breakpoint where button changes to block
   **/
  block: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', true]),
  /**
   * Color class
   **/
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /**
   * Size class
   **/
  size: PropTypes.oneOf(['baby', 'mama', 'papa'])
};

