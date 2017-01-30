import React, { PropTypes } from 'react';
<% if (wantsToCreateCssModule) { %>
import styles from '<%= cssModulePackageName %>';

export default function <%= moduleName %>(props) {
  return (
    <div className={styles.<%= camelizedModuleName %>} {...props} />
  );
}
<% } else { %>

export default function <%= moduleName %>(props) {
  return (
    <div {...props}>
      Hello World
    </div>
  );
}
<% } %>

<%= moduleName %>.propTypes = {
  /**
   * Remove this propType :)
   */
  className: PropTypes.string
};
