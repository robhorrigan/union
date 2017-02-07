import React from 'react';
import ReactDOM from 'react-dom';
import App from '#docs/components/App';

/* Import bootstrap css globals */
import '@xo-union/bootstrap';
/* Load prism css for syntax highlighting */
import '!style-loader!a-css-loader?mode=global!prism-themes/themes/prism-ghcolors.css';
import '!style-loader!a-css-loader?mode=global!#docs/global-syntax-highlighting.css';


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
