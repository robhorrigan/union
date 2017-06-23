import React from 'react';
import { mount, shallow } from 'enzyme';
import ChangeLogContent from './';
import ChangeLogStore from '../ChangeLogStore';

describe('<ChangeLogContent>', () => {
  describe('when changelog is not open', () => {
    it('renders nothing', () => {
      const changeLog = new ChangeLogStore();
      changeLog.currentRelease = null;

      const subject = shallow(<ChangeLogContent changeLog={changeLog} />)

      expect(subject.type()).toBe(null);
    });
  });

  describe('when changelog is open', () => {
    it('renders the markdown and version', () => {
      const changeLog = new ChangeLogStore();
      changeLog.toggle({
        body: '### Hello\n\nWorld',
        version: '1'
      });

      const subject = mount(<ChangeLogContent changeLog={changeLog} />)

      const firstHeader = subject.find('h1').at(0);
      const mdHeader = subject.find('h3').at(0);

      expect(firstHeader.text()).toBe('1');
      expect(mdHeader.text()).toBe('Hello');
    });
  });
});
