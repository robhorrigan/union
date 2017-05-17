import React from 'react';
import PropTypes from 'prop-types';

const hasDomainPattern = /^\/\/|^https?:\/\//;

/* eslint-disable jsx-a11y/anchor-has-content */
export function NewWindowAnchor(props) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

/**
 * This component may host the antipattern of functional greed.
 * In essence, it checks a condition and when that condition returns false
 * it hands complete control to the caller (via the FallbackComponent prop).
 * This form of handing control is usually not necessary since it can be accomplished
 * with a simple tertiary(?:) or the OR (||) operators.
 *
 * However, the argument for keeping this function is that it the scenario when
 * FallbackComponent defaults to 'a', it is very useful to pass a list links
 * to this function and have it assume the proper target for each.
 */
export function AssumedTargetAnchor({ FallbackComponent = 'a', ...props }) {
  if (hasDomainPattern.test(props.href)) {
    return <NewWindowAnchor href={props.href} {...props} />;
  }

  return <FallbackComponent {...props} />;
}

AssumedTargetAnchor.propTypes = {
  href: PropTypes.string,
  FallbackComponent: PropTypes.func
};
