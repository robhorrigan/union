import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'mobx-react';
import { syncHistoryWithStore } from 'mobx-react-router';

import Error404 from '#docs/components/Errors/404';
import Layout from '#docs/components/Layout';
import Article from '#docs/entities/Article';
import siteConfig from '$site-config';
import generateRoutes from './generateRoutes';
import handleBookmark from './handleBookmark';
import RouterStore from './RouterStore';

// eslint-disable-next-line camelcase
const rootPath = __webpack_public_path__;

export default class Routes extends Component {
  router = new RouterStore()
  history = syncHistoryWithStore(browserHistory, this.router)

  render() {
    const routes = generateRoutes(Article.all);

    return (
      <Provider router={this.router}>
        <Router history={this.history} onUpdate={handleBookmark}>
          <Route path={rootPath} component={Layout} >
            <IndexRoute to={siteConfig.landingPage} />
            {routes}
            <Route path="*" component={Error404} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
