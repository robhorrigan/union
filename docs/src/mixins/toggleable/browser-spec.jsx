import React, { Component } from 'react';
import { mount } from 'enzyme';
import toggleable from './';
import Toggler from './toggler';

function getAttribute(...args) {
  return this.getDOMNode().getAttribute(...args);
}

describe('@toggleable', () => {
  @toggleable
  class TestComponent extends Component {
    render() {
      return <div>Hello</div>;
    }
  }

  it('sets the id on the element', () => {
    const toggler = new Toggler();
    const subject = mount(
      <TestComponent toggler={toggler} toggledAs="test-component-name" />
    );

    expect(subject::getAttribute('id')).toBe('test-component-name');
  });

  it('toggles the element when the name is added to the toggler', () => {
    const toggler = new Toggler();
    const subject = mount(
      <TestComponent toggler={toggler} toggledAs="test-component-name" />
    );

    expect(subject::getAttribute('data-toggle')).toBe('off');

    expect(subject::getAttribute('aria-hidden')).toBe('true');

    toggler.show('test-component-name');

    expect(subject::getAttribute('data-toggle')).toBe('on');

    expect(subject::getAttribute('aria-hidden')).toBe('false');
  });
});
