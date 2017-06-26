import React from 'react';
import { mount } from 'enzyme';
import Snippet from '@components/Snippet';
import Demo from './';

describe('<Demo>', () => {
  const TestComponent = () => <div />;

  it('renders the child component', () => {
    const subject = mount(<Demo><TestComponent /></Demo>);

    expect(subject.find(TestComponent).length).toBe(1);
  });

  it('creates a code snippet from the child component', () => {
    const subject = mount(<Demo><TestComponent className="random-string" /></Demo>);

    const snippet = subject.find(Snippet);

    expect(snippet.text()).toBe('<TestComponent className="random-string" />');

    expect(snippet.props().lang).toBe('jsx');
  });

  describe('cssDependencies', () => {
    it('allows you to specify css dependencies to improve snippet readability', () => {
      const cssDependencies = {
        moduleName: {
          identifier: 'random-string'
        }
      };

      const subject = mount(
        <Demo cssDependencies={cssDependencies}>
          <TestComponent className="random-string" />
        </Demo>
      );

      const snippet = subject.find(Snippet);

      expect(snippet.text()).toBe('<TestComponent className={moduleName.identifier} />');
    });
  });

  describe('propOverrides', () => {
    it('allows other props to be overriden in snippet', () => {
      const subject = mount(
        <Demo propOverrides={{ callback: 'replaced' }}>
          <TestComponent callback={function complexFunction() { }} />
        </Demo>
      );

      const snippet = subject.find(Snippet);

      expect(snippet.text()).toBe('<TestComponent callback={replaced} />');
    });
  });


  describe('ignoreProps', () => {
    it('allows ignoring of props', () => {
      const subject = mount(
        <Demo ignoreProps={['callback']}>
          <TestComponent callback={function complexFunction() { }} />
        </Demo>
      );

      const snippet = subject.find(Snippet);

      expect(snippet.text()).toBe('<TestComponent />');
    });
  });
});
