import React from 'react';
import { mount } from 'enzyme';
import Snippet from '@components/Snippet';
import InstallSnippet from './';

describe('<InstallSnippet>', () => {
  it('renders install instructions', () => {
    const subject = mount(<InstallSnippet packageJson={{ name: 'test', version: '1.0.0' }} />);
    const snippet = subject.find(Snippet);

    expect(snippet.text()).toBe('npm install --save test@1.0.0');
  });
});
