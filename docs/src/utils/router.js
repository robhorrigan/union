
// eslint-disable-next-line import/prefer-default-export
export function eachRoute(routes, callback, parentRoute) {
  routes.forEach((route) => {
    callback(route, parentRoute);

    if (route.childRoutes) {
      eachRoute(route.childRoutes, callback, route);
    }
  });
}
