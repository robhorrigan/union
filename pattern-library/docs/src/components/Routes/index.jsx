import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Error404 from '#docs/components/Errors/404';
import Layout from '#docs/components/Layout';
import Article from '#docs/entities/Article';
import siteConfig from '$site-config';
import generateRoutes from './generateRoutes';
import handleBookmark from './handleBookmark';

// eslint-disable-next-line camelcase
const rootPath = __webpack_public_path__;

export default function Routes() {
  const routes = generateRoutes(Article.all);

  return (
    <Router history={browserHistory} onUpdate={handleBookmark}>
      <Route path={rootPath} component={Layout} >
        <IndexRoute to={siteConfig.landingPage} />
        {routes}
        <Route path="*" component={Error404} />
      </Route>
    </Router>
  );
}
