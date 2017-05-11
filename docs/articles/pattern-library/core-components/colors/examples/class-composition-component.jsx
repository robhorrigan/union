import React from 'react';
import styles from './class-composition.css';

export default function MyComponent() {
  return (
    <div className={styles['my-component-class']}>
      Hello world from my component
    </div>
  );
}
