import React from 'react';
import PropTypes from 'prop-types';
import matches from 'xojs/lib/element/matches';
import callOrSelf from 'xojs/lib/function/callOrSelf';
import { g } from 'xojs/lib/runtime/getGlobal';
import willOpenNewTab from '@segment/is-meta';
import { autobind } from 'core-decorators';

  /* eslint-disable no-console*/
const analyticsStub = {
  track() {
    console.error(`global analytics is not defined.
This is a requirement to properly report clicks.`);
  }
};

export class DefaultFollowStrategy {
  constructor({ timeout = 300, location = g.location } = {}) {
    this.timeout = timeout;
    this.location = location;
  }

  call({ href }) {
    setTimeout(() => {
      this.location.href = href;
    }, this.timeout);
  }
}

function linkWillChangePage(element) {
  const target = element.getAttribute('target');
  const href = element.getAttribute('href');

  return href && target !== '_blank';
}

export default class GenericClickTracker extends React.Component {
  static propTypes = {
    /**
     * The trackable components
     */
    children: PropTypes.node.isRequired,
    /**
     * Selector of elements that are trackable
     */
    trackableSelector: PropTypes.string,
    /**
     * Event name to report in analytics track call
     */
    eventName: PropTypes.oneOfType([
      PropTypes.func, PropTypes.string
    ]).isRequired,
    /**
     * Object with event data to report in analytics track call
     */
    eventData: PropTypes.oneOfType([
      PropTypes.func, PropTypes.shape()
    ]).isRequired,
    /**
     * analytics library dependency injection
     */
    analytics: PropTypes.shape({ track: PropTypes.func }),
     /**
     * This is a function implementing the strategy to follow a link after it has been clicked.
     * `false` disables opening of the link.
     * This only applies to trackable links that will leave the page. If a link has a `target="_blank"` property
     * or the user is attempting to open a new tab, the follow strategy will have no effect.
     */
    followStrategy: PropTypes.oneOfType([
      PropTypes.oneOf([false]),
      PropTypes.shape({
        call: PropTypes.func
      })
    ])
  }

  static defaultProps = {
    followStrategy: new DefaultFollowStrategy(),
    analytics: g.analytics,
    trackableSelector: 'a'
  }

  @autobind
  handleClick(clickEvent) {
    const element = clickEvent.target;
    const {
      followStrategy,
      analytics = g.analytics || analyticsStub,
      trackableSelector
    } = this.props;

    if (element::matches(trackableSelector)) {
      const eventName = this.props.eventName::callOrSelf(element);
      const eventData = this.props.eventData::callOrSelf(element);

      analytics.track(eventName, eventData);

      if (linkWillChangePage(element) && !willOpenNewTab(clickEvent)) {
        const href = element.getAttribute('href');
        clickEvent.preventDefault();

        if (followStrategy && typeof followStrategy.call === 'function') {
          followStrategy.call({ href });
        }
      }
    }
  }

  render() {
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    const { children } = this.props;

    return (
      <div onClick={this.handleClick}>
        {children}
      </div>
    );
  }
}

