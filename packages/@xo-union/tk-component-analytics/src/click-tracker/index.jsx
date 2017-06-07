import React from 'react';
import PropTypes from 'prop-types';
import GenericClickTracker from '@xo-union/tk-component-analytics/lib/generic-click-tracker';

function selectionValue() {
  const selection = this.dataset.trackableSelection || this.textContent.trim();
  const namespace = this.dataset.trackableGroup;

  if (namespace) {
    return `${namespace} > ${selection}`;
  }

  return selection;
}

export default function ClickTracker({ product, ...props }) {
  return (
    <GenericClickTracker
      trackableSelector="[data-trackable],[data-trackable-selection]"
      eventData={element => ({
        product,
        platform: 'web',
        selection: element::selectionValue()
      })}
      {...props}
    />
  );
}

ClickTracker.propTypes = {
  /**
   * The name of your product
   */
  product: PropTypes.string.isRequired
};
