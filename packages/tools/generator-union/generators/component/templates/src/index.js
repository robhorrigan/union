import React from 'react';
<% if (wantsToCreateCssModule) { %>
import styles from '<%= cssModulePackageName %>';

export default function <%= moduleName %>() {
  return (
    <div className={styles.testClass}>
    </div>
  );
}
<% } else { %>

export default function <%= moduleName %>() {
  return (
    <div>
      Hello World
    </div>
  );
}
<% } %>

