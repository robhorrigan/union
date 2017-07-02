import React, { Component } from 'react';
import { Provider as MobxProvider } from 'mobx-react';
import Membership from '@xo-union/store-membership';

export default class Provider extends Component {
  membershipStore = new Membership();

  render() {
    return (
      <MobxProvider membership={this.membershipStore} {...this.props} />
    );
  }
}
