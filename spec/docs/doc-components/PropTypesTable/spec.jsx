import React from 'react';
import { mount } from 'enzyme';
import PropTypesTable from '#docs/doc-components/PropTypesTable';

const map = Array.prototype.map;

function textContentForEach(nodes) {
  return map.call(nodes, (n) => n.textContent);
}

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
      const columns = textContentForEach(subject.find('th').nodes);

      expect(columns).toEqual(['name', 'description', 'type', 'default']);
    });

    describe('when attributes are excluded', () => {
      it('removes them from the header', () => {
        const subject = mount(<PropTypesTable metadata={metadataMock} exclude={["default"]} />);
        const columns = textContentForEach(subject.find('th').nodes);

        expect(columns).toEqual(['name', 'description', 'type']);
      });
    });
  });

  describe('table body', () => {
    it('renders the values from the prop metadata object', () => {
      const subject = mount(<PropTypesTable metadata={metadataMock} />);
      const columns = textContentForEach(subject.find('td').nodes);

      expect(columns).toEqual(['prop1', 'A Special PropType', 'string', 'this-is-the-default']);
    });

    describe('when attributes are excluded', () => {
      it('removes them from the rows', () => {
        const subject = mount(<PropTypesTable metadata={metadataMock} exclude={["default"]} />);
        const columns = textContentForEach(subject.find('td').nodes);

        expect(columns).toEqual(['prop1', 'A Special PropType', 'string']);
      });
    });
  });
});
