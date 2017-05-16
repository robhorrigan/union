import React from 'react';
import PropTypes from 'prop-types';

const hasDomainPattern = /^\/\/|^https?:\/\//;

/* eslint-disable jsx-a11y/anchor-has-content */
export function NewWindowAnchor(props) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

export function AssumedTargetAnchor({ href, ...props }) {
  if (hasDomainPattern.test(href)) {
    return <NewWindowAnchor href={href} {...props} />;
  }

  return <a href={href} {...props} />;
}

AssumedTargetAnchor.propTypes = {
  href: PropTypes.string
};
