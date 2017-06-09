import React from 'react';
import { Button } from '@xo-union/tk-component-buttons';
import styles from 'shared-list-demo.scss';

export default function MainDemo() {
  return (
    <ul className={styles['list-demo']}>
      <li>
        <Button size="papa" color="primary">Button</Button>
      </li>
      <li>
        <Button size="mama" color="primary">Button</Button>
      </li>
      <li>
        <Button size="baby" color="primary">Button</Button>
      </li>

      <li>
        <Button size="papa" color="secondary">Button</Button>
      </li>
      <li>
        <Button size="mama" color="secondary">Button</Button>
      </li>
      <li>
        <Button size="baby" color="secondary">Button</Button>
      </li>

      <li>
        <Button size="papa" color="tertiary">Button</Button>
      </li>
      <li>
        <Button size="mama" color="tertiary">Button</Button>
      </li>
      <li>
        <Button size="baby" color="tertiary">Button</Button>
      </li>
    </ul>
  );
}
