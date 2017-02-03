import React from 'react';
import { mount } from 'enzyme';
import PropTypesTable from './';

const map = Array.prototype.map;

describe('<PropTypesTable>', () => {
  const metadataMock = {
    prop1: {
      type: { name: 'string' },
      description: 'A Special PropType',
      defaultValue: {
        value: 'this-is-the-default'
      }
    }
  };

  describe('table head', () => {
    it('renders the header', () => {
      const subject = mount(<PropTypesTable metadata={metadataMock} />);
      const headers = map.call(subject.find('th').nodes, (n) => n.textContent);

      expect(headers).toEqual(['name', 'description', 'type', 'default']);
    });

    describe('when attributes are excluded', () => {
      it('removes them from the header', () => {
        const subject = mount(<PropTypesTable metadata={metadataMock} exclude={["default"]} />);
        const headers = map.call(subject.find('th').nodes, (n) => n.textContent);

        expect(headers).toEqual(['name', 'description', 'type']);
      });
    });
  });

  describe('table body', () => {
    it('renders the values from the prop metadata object', () => {
      const subject = mount(<PropTypesTable metadata={metadataMock} />);
      const headers = map.call(subject.find('td').nodes, (n) => n.textContent);

      expect(headers).toEqual(['prop1', 'A Special PropType', 'string', 'this-is-the-default']);
    });

    describe('when attributes are excluded', () => {
      it('removes them from the rows', () => {
        const subject = mount(<PropTypesTable metadata={metadataMock} exclude={["default"]} />);
        const headers = map.call(subject.find('td').nodes, (n) => n.textContent);

        expect(headers).toEqual(['prop1', 'A Special PropType', 'string']);
      });
    });
  });
});
