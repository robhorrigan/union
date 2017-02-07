import React from 'react';
import { mount } from 'enzyme';
import InstallSnippet from '#/doc-components/InstallSnippet';
import Snippet from '#/doc-components/Snippet';

describe('<InstallSnippet>', () => {
  it('renders install instructions', () => {
    const subject = mount(<InstallSnippet packageJson={{name: "test", version: "1.0.0"}} />);
    const snippet = subject.find(Snippet);

    expect(snippet.text()).toBe('npm install --save test@1.0.0');
  });
});
