import React, { PropTypes } from 'react';
import styles from '@union/fields-css';

export default function TextareaWithoutLabel({ name, ...props }) {
  const id = name + Date.now();

  return (
    <div className={styles.fieldContainer}>
      <textarea className={styles.textareaWithoutLabel} id={id} name={name} {...props}/>
    </div>
  )
}

TextareaWithoutLabel.propTypes = {
  /**
   * Used to generate id and name attributes
   */
  name: PropTypes.string.isRequired
};
