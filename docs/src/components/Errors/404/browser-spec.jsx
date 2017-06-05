import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import Error404 from './';

describe('404', () => {
  const routerMock = {
    routes: [
      {
        path: '/',
        childRoutes: [
          {
            path: 'test-1'
          },
          {
            path: 'test-2'
          }
        ]
      }
    ]
  };

  class RouterComponentMock extends Component {
    static childContextTypes = {
      router: PropTypes.any
    }

    static propTypes = {
      children: PropTypes.node.isRequired
    }

    getChildContext() {
      return {
        router: routerMock
      };
    }

    render() {
      return <div>{this.props.children}</div>;
    }
  }

  it('renders all available routes', () => {
    const subject = mount(
      <RouterComponentMock>
        <Error404 />
      </RouterComponentMock>
    );

    const link1 = subject.find('a[href="/"]');
    const link2 = subject.find('a[href="/test-1"]');
    const link3 = subject.find('a[href="/test-2"]');

    expect(link1.text()).toBe('/');
    expect(link2.text()).toBe('/test-1');
    expect(link3.text()).toBe('/test-2');
  });
});
