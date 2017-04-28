import React from 'react';
import PropTypes from 'prop-types';
import TrackableLinks from '@xo-union/analytics/trackable-links';

function selectionValue() {
  const selection = this.textContent.trim();
  const namespace = this.dataset.selectionGroupLabel;

  if (namespace) {
    return `${namespace} > ${selection}`;
  }

  return selection;
}

export default function HeaderNavAnalytics({ product, ...props }) {
  return (
    <TrackableLinks
      linkSelector='[data-click-role="navigate"]'
      eventName="Menu Interaction"
      eventData={element => ({
        product,
        platform: 'web',
        selection: element::selectionValue()
      })}
      {...props}
    />
  );
}

HeaderNavAnalytics.propTypes = {
  /**
   * The name of your product
   */
  product: PropTypes.string.isRequired
};
