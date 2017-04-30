import React from 'react';
import { mount } from 'enzyme';
import { Textarea } from '@xo-union/fields/src/components';

describe('<Textarea>', () => {
  describe('input', () => {
    function getInputNode(props) {
      return mount(<Textarea {...props} />).find('textarea').node;
    }

    it('sets the name', () => {
      const subject = getInputNode({ name: 'test-1' });

      expect(subject.name).toBe('test-1');
    });

    it('sets the id based on the name', () => {
      const subject = getInputNode({ name: 'test-1' });

      expect(subject.id).toBe('__ff-test-1__');
    });

    it('allows overriding id', () => {
      const subject = getInputNode({ name: 'test-1', id: 'custom' });

      expect(subject.id).toBe('custom');
    });
  });

  describe('label', () => {
    function getLabel(props) {
      return mount(<Textarea {...props} />).find('label').node;
    }

    it('sets the "for" property to the autoassigned id', () => {
      const subject = getLabel({ name: 'test-1' });

      expect(subject.getAttribute('for')).toBe('__ff-test-1__');
    });

    it('sets the "for" property to the given id', () => {
      const subject = getLabel({ name: 'test-1', id: 'custom-id' });

      expect(subject.getAttribute('for')).toBe('custom-id');
    });

    it('sets the label innerHTML based on the name', () => {
      const subject1 = getLabel({ name: 'test', id: 'custom-id' });
      const subject2 = getLabel({ name: 'test-case', id: 'custom-id-2' });

      expect(subject1.textContent).toEqual('Test');
      expect(subject2.textContent).toEqual('Test Case');
    });
  });
});
