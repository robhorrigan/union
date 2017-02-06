import React from 'react';
import { mount } from 'enzyme';
import Field from './';
import FieldCss from '@union/fields/css';

describe('<Field>', () => {
  describe('input', () => {
    function getInputNode(props) {
      return mount(<Field {...props} />).find('input').node;
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

    it('sets the type to text by default', () => {
      const subject = getInputNode({ name: 'test-1' });

      expect(subject.type).toBe('text');
    });

    it('allows overriding the type', () => {
      const subject = getInputNode({ name: 'test-1', type: 'email' });

      expect(subject.type).toBe('email');
    });

    it('configures the placeholder (This is needed to by the :placeholder-shown css pseudo selector)', () => {
      const subject = getInputNode({ name: 'test-1' });

      expect(subject.placeholder).toBe(' ');
    });

    it('sets the neutral classes by default', () => {
      const subject = getInputNode({ name: 'test-1'});
      const neutralClasses = FieldCss.field.split(' ');

      expect(subject.classList).toContain(...neutralClasses);
    });

    describe('when state is invalid', () => {
      it('sets the invalid class', () => {
        const subject = getInputNode({ name: 'test-1', state: 'invalid' });
        const invalidClasses = FieldCss.invalidField.split(' ');

        expect(subject.classList).toContain(...invalidClasses);
      });
    });

    describe('when state is valid', () => {
      it('sets the valid class', () => {
        const subject = getInputNode({ name: 'test-1', state: 'valid' });
        const validClasses = FieldCss.validField.split(' ');

        expect(subject.classList).toContain(...validClasses);
      });
    });
  });

  describe('label', () => {
    function getLabel(props) {
      return mount(<Field {...props} />).find('label').node;
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
