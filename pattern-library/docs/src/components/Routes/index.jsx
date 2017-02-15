import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Error404 from '#docs/components/Errors/404';
import Layout from '#docs/components/Layout';
import generateRoutes from './generateRoutes';
import handleBookmark from './handleBookmark';

// eslint-disable-next-line camelcase
const rootPath = __webpack_public_path__;

export default function Routes() {
  const routes = generateRoutes();

  return (
    <Router history={browserHistory} onUpdate={handleBookmark}>
      <Route path={rootPath} component={Layout} >
        {routes}
        <Route path="*" component={Error404} />
      </Route>
    </Router>
  );
}
