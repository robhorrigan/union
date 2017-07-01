import React, { Component } from 'react';
import style from '@xo-union/tk-component-membership-modal/lib/css';
import Modal from '@xo-union/tk-component-modal';
import { autobind } from 'core-decorators';
import SignUpView from './SignUpView';
import LogInView from './LogInView';

export default class MembershipModal extends Component {
  state = {
    viewElement: <SignUpView onClickLogIn={this.renderLogInView} />
  }

  @autobind
  renderLogInView() {
    this.setState({
      viewElement: (
        <LogInView onClickSignUp={this.renderSignUpView} />
      )
    })
  }

  @autobind
  renderSignUpView() {
    this.setState({
      viewElement: (
        <SignUpView onClickLogIn={this.renderLogInView} />
      )
    })
  }


  render() {
    return (
      <Modal>
        {this.state.viewElement}
      </Modal>
    );
  }
}
