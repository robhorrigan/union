import React from 'react';
import labelize from 'utilities/labelize';
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

