import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Layout from '#docs/components/Layout';
import generateRoutes from '#docs/utils/generateRoutes';

// eslint-disable-next-line camelcase
const rootPath = __webpack_public_path__;

function handleBookmark() {
  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      const bookmark = document.getElementById(hash.replace('#', ''));

      if (bookmark) {
        bookmark.scrollIntoView();
      }
    }, 0);
  }
}

export default function App() {
  const routes = generateRoutes();

  return (
    <Router history={browserHistory} onUpdate={handleBookmark}>
      <Route path={rootPath} component={Layout} >
        {routes}
      </Route>
    </Router>
  );
}
