import React, { PropTypes } from 'react';
import Article from '#docs/entities/Article';

import { NavItem } from '#docs/components/SideNav/utils';

const propTypes = {
  label: PropTypes.string
};

Article.all.forEach((article) => {
  function Component({ label = article.title() }) {
    return <NavItem href={article.permalink()}>{label}</NavItem>;
  }

  Component.propTypes = propTypes;

  exports[article.moduleName()] = Component;
});
