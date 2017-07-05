import React, { Component } from 'react';
import { Provider as MobxProvider } from 'mobx-react';
import Membership from '@xo-union/store-membership';

export default class Provider extends Component {
  membershipStore = new Membership(this.props.membership);

  render() {
    const { membership, ...props } = this.props;
    return (
      <MobxProvider membership={this.membershipStore} {...props} />
    );
  }
}
