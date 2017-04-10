import React, { Component } from 'react';
import CSS from 'react-css-modules';

import Article from '#docs/entities/Article';
import toggleable from '#docs/mixins/toggleable';

import NavWithGroups from '../Nav/NavWithGroups';
import subNavCss from '../SubNav/styles.css';

const NUMBER_OF_GROUPS = 7;

@toggleable
@CSS(subNavCss)
export default class ContentPatternsSubNav extends Component {
  static defaultProps = {
    contentPatternArticles: Article.contentPatterns()
  };

  render() {
    const { contentPatternArticles } = this.props;

    return (
      <NavWithGroups
        styleName="sub-nav"
        role="menu"
        items={contentPatternArticles}
        numberOfGroups={NUMBER_OF_GROUPS}
      />
    );
  }
}
