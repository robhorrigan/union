
export function eachRoute(routes, callback, parentRoute) {
  routes.forEach((route) => {
    callback(route, parentRoute);

    if (route.childRoutes) {
      eachRoute(route.childRoutes, callback, route);
    }
  });
}
