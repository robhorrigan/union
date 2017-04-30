import React from 'react';
import PropTypes from 'prop-types';
import styles from '<%= packageCssPath %>';

export default function <%= moduleName %>({ greeting = "Hello world" }) {
  return <div className={styles.<%= camelizedModuleName %>}>{greeting}</div>;
}

<%= moduleName %>.propTypes = {
  greeting: PropTypes.string
};
