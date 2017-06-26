import React from 'react';
import PropTypes from 'prop-types';
import GenericClickTracker from '@xo-union/tk-component-analytics/lib/generic-click-tracker';
import callOrSelf from 'xojs/lib/function/callOrSelf';

function selectionValue() {
  let selection = this.dataset.trackableSelection || this.textContent.trim();
  const namespace = this.dataset.trackableGroup;

  if (namespace) {
    selection = `${namespace} > ${selection}`;
  }

  return selection.toLowerCase();
}

export default function ClickTracker({ product, eventData = {}, ...props }) {
  return (
    <GenericClickTracker
      trackableSelector="[data-trackable],[data-trackable-selection]"
      eventData={element => ({
        product,
        platform: 'web',
        selection: element::selectionValue(),
        ...eventData::callOrSelf(element)
      })}
      {...props}
    />
  );
}

ClickTracker.propTypes = {
  /**
   * The name of your product
   */
  product: PropTypes.string.isRequired,
  /**
   * Object with event data to report in analytics track call
   */
  eventData: PropTypes.oneOfType([
    PropTypes.func, PropTypes.shape()
  ])
};
