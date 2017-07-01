import React, { Component } from 'react';
import { IconButton } from '@xo-union/tk-component-icons';
import style from '@xo-union/tk-component-modal/lib/css';
import { autobind } from 'core-decorators';

export default class Modal extends Component {
  state = {
    isOpen: true
  }

  @autobind
  close(evt) {
    if (evt.currentTarget === evt.target) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    if (!this.state.isOpen) {
      return null;
    }

    const { children } = this.props;

    return (
      <div className={style.overlay} onClick={this.close}>
        <div className={style.container}>
          <div className={style['button-container']}>
            <IconButton name="close" className={style['close-button']} onClick={this.close}/>
          </div>
          {children}
        </div>
      </div>
    );
  }
}

