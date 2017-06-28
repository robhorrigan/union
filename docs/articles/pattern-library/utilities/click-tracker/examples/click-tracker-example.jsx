/* eslint-disable no-console */
import React from 'react';
import styles from '@styles/list-demo';
import { Button } from '@xo-union/tk-component-buttons';

import ClickTracker from '@xo-union/tk-component-analytics/lib/click-tracker';
import { createTrackableProps } from '@xo-union/tk-component-analytics/lib/trackable';

/**
 * Don't use this. This is just for the demo.
 */
const mockAnalytics = {
  track(...params) { console.log(...params); }
};

export default function TrackableComponent() {
  return (
    <ClickTracker analytics={mockAnalytics} product="fashion" eventName="Demo Event">
      <ul className={styles['list-demo']}>
        <li>
          <Button {...createTrackableProps()}>
            I am trackable, and my `selection` value is assumed from my text
          </Button>
        </li>
        <li>
          <Button {...createTrackableProps({ selection: 'Override selection' })}>
            I am trackable, and my `selection` value is overriden
          </Button>
        </li>
        <li>
          <Button {...createTrackableProps({ selection: 'Override selection', group: 'Group' })}>
            I am trackable, and I belong to a group
          </Button>
        </li>
        <li>
          <Button>I am not trackable</Button>
        </li>
      </ul>
    </ClickTracker>
  );
}
