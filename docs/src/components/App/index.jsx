import React, { Component } from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import { Provider } from 'mobx-react';
import { syncHistoryWithStore } from 'mobx-react-router';

import Error404 from '#docs/components/Errors/404';
import Layout from '#docs/components/Layout';
import Article from '#docs/entities/Article';
import siteConfig from '$site-config';
import generateRoutes from './generateRoutes';
import handleBookmark from './handleBookmark';
import RouterStore from './RouterStore';
import GithubStore from './GithubStore';

// eslint-disable-next-line camelcase
const rootPath = __webpack_public_path__;

export default class App extends Component {
  router = new RouterStore()
  github = new GithubStore()
  history = syncHistoryWithStore(browserHistory, this.router)

  componentDidMount() {
    this.github.hydrate();
  }

  render() {
    const routes = generateRoutes(Article.all);

    return (
      <Provider router={this.router} github={this.github}>
        <Router history={this.history} onUpdate={handleBookmark}>
          <Route path={rootPath} component={Layout} >
            {routes}
            <Route path="*" component={Error404} />
            <IndexRedirect to={siteConfig.landingPage} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
