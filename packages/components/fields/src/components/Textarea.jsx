import React from 'react';
import humanize from 'humanize-string';
import styles from '@union/fields-css';

export default function Textarea({ name, label = humanize(name), ...props }) {
  const id = name + Date.now();

  return (
    <div className={styles.fieldContainer}>
      <textarea className={styles.textareaWithLabel} id={id} name={name} {...props}/>
      <label className={styles.textareaLabel} htmlFor={id}>{ label }</label>
    </div>
  )
}

