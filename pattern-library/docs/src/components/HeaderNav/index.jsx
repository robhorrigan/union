import React, { Component, PropTypes } from 'react';
import { autorun } from 'mobx';
import { observer, inject, Provider } from 'mobx-react';

import ContentPatternsSubNav from '#docs/components/ContentPatternsSubNav';
import CoreComponentsSubNav from '#docs/components/CoreComponentsSubNav';
import { SubNavContainer } from '#docs/components/SubNav';
import PrimaryNav from './navs/PrimaryNav';
import PatternLibraryNav from './navs/PatternLibraryNav';
import Toggler from './NavStore';
import ids from './ids';

@inject('router')
@observer
export default class HeaderNav extends Component {
  toggler = new Toggler([ ids.primaryNav ]);

  static propTypes = {
    router: PropTypes.shape({ inPath: PropTypes.func })
  };

  constructor(props) {
    super(props);

    autorun(() => {
      console.log('CALLED')
      this.toggler.clear();

      if (this.props.router.inPath('/pattern-library')) {
        this.toggler.show(ids.primaryNavPatternLibrary);
      } else {
        this.toggler.show(ids.primaryNav);
      }
    });
  }

  render() {
    return (
      <Provider toggler={this.toggler}>
        <header>
          <PrimaryNav toggledAs={ids.primaryNav} />
          <PatternLibraryNav toggledAs={ids.primaryNavPatternLibrary} />

          <SubNavContainer>
            <ContentPatternsSubNav toggledAs={ids.secondaryNavContentPattern} />
            <CoreComponentsSubNav toggledAs={ids.secondaryNavCoreComponents} />
          </SubNavContainer>
        </header>
      </Provider>
    );
  }
}
