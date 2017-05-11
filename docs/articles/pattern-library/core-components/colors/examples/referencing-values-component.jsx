import React from 'react';
import styles from './referencing-values.css';

export default function MyComponent() {
  return (
    <div className={styles['my-component-class']}>
      Hello world from my component
    </div>
  );
}
