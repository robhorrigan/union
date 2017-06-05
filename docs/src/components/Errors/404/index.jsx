import React from 'react';
import PropTypes from 'prop-types';
import { normalizePath } from '#docs/utils/paths';
import { eachRoute } from '#docs/utils/router';
import type from '@xo-union/tk-css-typography';

export default function Error404(_, { router }) {
  const routes = [];

  eachRoute(router.routes, (route, parentRoute) => {
    let path;

    if (parentRoute) {
      path = normalizePath(parentRoute.path, route.path);
    } else {
      path = route.path;
    }

    if (route.path !== '*') {
      routes.push(<li key={path}><a href={path}>{path}</a></li>);
    }
  });

  return (
    <div>
      Page not found. Here is a list of all valid pages.

      <ul className={type.listUnstyled}>
        {routes}
      </ul>
    </div>
  );
}

Error404.contextTypes = {
  router: PropTypes.any
};

