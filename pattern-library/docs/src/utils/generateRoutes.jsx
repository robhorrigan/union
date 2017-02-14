import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Article from '#docs/entities/Article';
import { landingPage } from '$site-config';

const LANDING_PAGE_KEY = '__landing-page';
export default function generateRoutes() {
  const pageRoutes = Article.all.map(article =>
    <Route
      key={article.id}
      path={article.permalink()}
      component={article.component()}
    />
);

  pageRoutes.unshift(<IndexRedirect key={LANDING_PAGE_KEY} to={landingPage} />);

  return pageRoutes;
}
