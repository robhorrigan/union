import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { autorun } from 'mobx';
import { inject, Provider } from 'mobx-react';

import Toggler from '#docs/mixins/toggleable/toggler';
import Article from '#docs/entities/Article';

import CoreComponentsSubNav from './CoreComponentsSubNav';
import SubNavWithGroups from './SubNavWithGroups';
import SubNavContainer from './SubNav/Container';
import PrimaryNav from './PrimaryNav';
import PatternLibraryNav from './PatternLibraryNav';
import ids from './ids';

const MAX_NUMBER_OF_SUBNAV_COLUMNS = 7;

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
            <CoreComponentsSubNav toggledAs={ids.secondaryNavCoreComponents} />

            <SubNavWithGroups
              toggledAs={ids.secondaryNavContentPattern}
              items={Article.contentPatterns()}
              numberOfGroups={MAX_NUMBER_OF_SUBNAV_COLUMNS}
            />
            <SubNavWithGroups
              toggledAs={ids.secondaryNavUtilities}
              items={Article.utilities()}
              numberOfGroups={MAX_NUMBER_OF_SUBNAV_COLUMNS}
            />
          </SubNavContainer>
        </header>
      </Provider>
    );
  }
}
