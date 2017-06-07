import React from 'react';
import PropTypes from 'prop-types';
import GenericTrackableLinks from '@xo-union/tk-component-analytics/lib/generic-trackable-links';

function selectionValue() {
  const selection = this.dataset.trackableSelection || this.textContent.trim();
  const namespace = this.dataset.trackableGroup;

  if (namespace) {
    return `${namespace} > ${selection}`;
  }

  return selection;
}

export default function TrackableLinks({ product, ...props }) {
  return (
    <GenericTrackableLinks
      linkSelector="[data-trackable],[data-trackable-selection]"
      eventData={element => ({
        product,
        platform: 'web',
        selection: element::selectionValue()
      })}
      {...props}
    />
  );
}

TrackableLinks.propTypes = {
  /**
   * The name of your product
   */
  product: PropTypes.string.isRequired
};
