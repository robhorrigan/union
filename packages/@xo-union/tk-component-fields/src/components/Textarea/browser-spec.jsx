import React from 'react';
import { mount } from 'enzyme';
import FieldCss from '@xo-union/tk-component-fields/src/css';
import Textarea from './';

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

    it('sets the neutral classes by default', () => {
      const subject = getInputNode({ name: 'test-1' });
      const neutralClasses = FieldCss.textarea.split(' ');

      expect(subject.classList).toContain(...neutralClasses);
    });

    describe('when state is invalid', () => {
      it('sets the invalid class', () => {
        const subject = getInputNode({ name: 'test-1', state: 'invalid' });
        const invalidClasses = FieldCss.invalidTextarea.split(' ');

        expect(subject.classList).toContain(...invalidClasses);
      });
    });

    describe('when state is valid', () => {
      it('sets the valid class', () => {
        const subject = getInputNode({ name: 'test-1', state: 'valid' });
        const validClasses = FieldCss.validTextarea.split(' ');

        expect(subject.classList).toContain(...validClasses);
      });
    });
  });

  describe('label', () => {
    function getLabel(props) {
      return mount(<Textarea {...props} />).find('label').node;
    }

    it('does not create a label if one is not supplied', () => {
      const subject = getLabel({ name: 'test-1' });

      expect(subject).toBe(undefined);
    });

    it('sets the "for" property to the autoassigned id', () => {
      const subject = getLabel({ label: 'test-label', name: 'test-1' });

      expect(subject.getAttribute('for')).toBe('__ff-test-1__');
    });

    it('sets the "for" property to the given id', () => {
      const subject = getLabel({ label: 'test-label', name: 'test-1', id: 'custom-id' });

      expect(subject.getAttribute('for')).toBe('custom-id');
    });

    it('sets the label innerHTML based on the label property', () => {
      const subject1 = getLabel({ label: 'test-label', name: 'test' });
      const subject2 = getLabel({ label: 'test-label-2', name: 'test-case' });

      expect(subject1.textContent).toEqual('test-label');

      expect(subject2.textContent).toEqual('test-label-2');
    });
  });
});
