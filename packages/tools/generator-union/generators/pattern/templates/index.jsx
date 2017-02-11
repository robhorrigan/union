import React, { PropTypes } from 'react';
import styles from '<%= packageCssPath %>'

export default function <%= moduleName %>({ greeting = "Hello world" }) {
  return <div className={styles.<%= camelizedModuleName %>}>{greeting}</div>;
}

<%= moduleName %>.propTypes = {
  greeting: PropTypes.string.isRequired
};

