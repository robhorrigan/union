import React, { Component, PropTypes } from 'react';
import { autorun } from 'mobx';
import { inject, Provider } from 'mobx-react';

import Toggler from '#docs/mixins/toggleable/toggler';

import ContentPatternsSubNav from './ContentPatternsSubNav';
import CoreComponentsSubNav from './CoreComponentsSubNav';
import SubNavContainer from './SubNav/Container';
import PrimaryNav from './PrimaryNav';
import PatternLibraryNav from './PatternLibraryNav';
import ids from './ids';

@inject('router')
export default class HeaderNav extends Component {
  static propTypes = {
    router: PropTypes.shape({ inPath: PropTypes.func })
  };

  constructor(props) {
    super(props);

    this.toggler = new Toggler([ids.primaryNav]);
  }

  componentDidMount() {
    autorun(() => {
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
