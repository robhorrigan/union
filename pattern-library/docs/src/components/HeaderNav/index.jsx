import React, { Component, PropTypes } from 'react';
import { observer, inject } from 'mobx-react';

import PrimaryNav from './navs/PrimaryNav';
import PatternLibraryNav from './navs/PatternLibraryNav';

@inject('router')
@observer
export default class HeaderNav extends Component {
  static propTypes = {
    router: PropTypes.shape({ inPath: PropTypes.func })
  };

  get NavComponent() {
    if (this.props.router.inPath('/pattern-library')) return PatternLibraryNav;

    return PrimaryNav;
  }

  render() {
    return (
      <header>
        <this.NavComponent />
      </header>
    );
  }
}
