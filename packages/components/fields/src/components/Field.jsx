import React, { PropTypes as T } from 'react';
import humanize from 'humanize-string';
import styles from '@union/fields-css';

export default function Field({
  name,
  validationMessage,
  label = humanize(name),
  valid = true,
  ...props
}) {
  const id = name + Date.now();
  let inputClass = styles.field ;

  if (!valid) {
    inputClass = styles.invalidField;
  }

  return (
    <div className={styles.fieldContainer}>
      <input className={inputClass} id={id} name={name} {...props} placeholder=" " />
      <label className={styles.fieldLabel} htmlFor={id} > { label } </label>
      <div className={styles.requirements}>{validationMessage}</div>
    </div>
  );
}

Field.propTypes = {
  /**
   * Name used for input element
   */
  name: T.string.isRequired,
  /**
   * The input's label string
   */
  label: T.string,
  /**
   * Render valid state
   */
  valid: T.bool,
  /**
   * Validation message used when field is invalid
   */
  validationMessage: T.string
};
