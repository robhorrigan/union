import React, { PropTypes } from 'react';
import { labelize } from '../utilities';
import styles from '@union/fields-css';

export default function Textarea({ name, label = labelize(name), ...props }) {
  const id = name + Date.now();

  return (
    <div className={styles.fieldContainer}>
      <textarea className={styles.textareaWithLabel} id={id} name={name} {...props}/>
      <label className={styles.textareaLabel} htmlFor={id}>{ label }</label>
    </div>
  )
}

Textarea.propTypes = {
  /**
   * Used to generate the field's name, id and label
   **/
  name: PropTypes.string.isRequired,
  /**
    * Override the default label (which is derived from the name)
    **/
  label: PropTypes.string
};
