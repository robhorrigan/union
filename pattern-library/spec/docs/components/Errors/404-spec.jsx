import React, { Component, PropTypes } from 'react';
import { mount } from 'enzyme';
import Error404 from '#docs/components/Errors/404';

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

    getChildContext() {
      return {
        router: routerMock
      }
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
