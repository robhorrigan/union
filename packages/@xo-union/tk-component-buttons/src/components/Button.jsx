import React from 'react';
import PropTypes from 'prop-types';
import { processProps } from '../utilities';

export default function Button(props) {
  return <button {...processProps(props)} />;
}

Button.propTypes = {
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
  size: PropTypes.oneOf(['baby', 'mama', 'papa']),
  /**
   * Add additional CTA specific styles -- Only applies to Button components
   */
  isCTA: PropTypes.bool,
  /**
   * The button's content
   */
  children: PropTypes.node
};
