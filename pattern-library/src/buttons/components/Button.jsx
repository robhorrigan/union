import React, { PropTypes } from 'react';
import { processProps } from '../utilities';

export default function Button(props) {
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

