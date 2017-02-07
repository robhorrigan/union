import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Article from '#docs/entities/Article';
import { landingPage } from '$site-config';

export default function generateRoutes() {
  const pageRoutes = Article.all.map(function (article, i) {
    return (<Route key={i + 1} path={article.permalink()} component={() => <article.Component {...article.toProps()} />}/>);
  });

  pageRoutes.unshift(<IndexRedirect key={0} to={landingPage} />);

  return pageRoutes;
}
