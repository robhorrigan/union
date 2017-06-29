import React from 'react';
import { mount } from 'enzyme';
import VersionList from './';
import ChangeLogStore from '../ChangeLogStore';

describe('<VersionList>', () => {
  describe('actions', () => {
    describe('onClick of version toggle button', () => {
      it('toggles the given release', () => {
        const changeLog = new ChangeLogStore();

        const releasesMock = [
          {
            tagName: '1',
            version: '1'
          }
        ];

        const subject = mount(<VersionList changeLog={changeLog} releases={releasesMock} />);

        const toggleButton = subject.find('ToggleButton');

        expect(toggleButton.props().isOn).toBe(false);

        toggleButton.simulate('click');

        expect(toggleButton.props().isOn).toBe(true);
      });
    });
  });
});
