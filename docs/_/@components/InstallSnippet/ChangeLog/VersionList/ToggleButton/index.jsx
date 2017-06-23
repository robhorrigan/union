import React, { Component } from 'react';
import { Button } from '@xo-union/tk-component-buttons';

export default class ToggleButton extends Component {
  btnColor() {
    return do {
      if (this.props.isOn) {
        'primary'
      } else {
        'tertiary';
      }
    }
  }

  render() {
    const { isOn, ...props } = this.props;

    return (
      <Button size="baby" color={this.btnColor()} isCTA {...props} />
    );
  }
}

