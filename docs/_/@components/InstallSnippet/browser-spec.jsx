import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'mobx-react';
import Snippet from '@components/Snippet';
import InstallSnippet from './';
import GithubStore from '@stores/GithubStore';

describe('<InstallSnippet>', () => {
  it('renders install instructions', () => {
    const githubStore = new GithubStore();
    const subject = mount(
      <Provider github={githubStore}>
        <InstallSnippet packageJson={{ name: 'test', version: '1.0.0' }} />
      </Provider>
    );

    const snippet = subject.find(Snippet);

    expect(snippet.text()).toBe('npm install --save test@1.0.0');
  });

  it('renders the changelog component', () => {
    const githubStore = new GithubStore();
    const subject = mount(
      <Provider github={githubStore}>
        <InstallSnippet packageJson={{ name: 'test', version: '1.0.0' }} />
      </Provider>
    );

    expect(subject.find('ChangeLog').length).toBe(1);
  })
});
