import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

export default function linkedField(C) {
  @inject('formData')
  @observer
  class LinkedField extends Component {
    constructor(props) {
      super(props);

      const { formData, name } = this.props;
      formData.add(name, this.props);
    }

    render() {
      return (<C {...this.props} />);
    }
  }

  return LinkedField;
}
