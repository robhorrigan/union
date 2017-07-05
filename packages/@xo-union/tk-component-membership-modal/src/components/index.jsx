import React, { Component } from 'react';
import style from '@xo-union/tk-component-membership-modal/lib/css';
import Modal from '@xo-union/tk-component-modal';
import { autobind } from 'core-decorators';
import SignUpView from './SignUpView';
import LogInView from './LogInView';
import MembershipModalStore from '../stores/MembershipModalStore';
import { computed } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class MembershipModal extends Component {
  static defaultProps = {
    initialView: MembershipModalStore.SIGN_UP
  }

  store = new MembershipModalStore({
    initialView: this.props.initialView
  })

  @computed
  get ViewComponent() {
    if (this.store.isSignUp) {
      return SignUpView;
    }

    if (this.store.isLogIn) {
      return LogInView;
    }
  }

  render() {
    return (
      <Modal>
        <this.ViewComponent membershipModal={this.store} />
      </Modal>
    );
  }
}
