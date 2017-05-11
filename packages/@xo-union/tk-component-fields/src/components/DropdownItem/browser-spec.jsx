import React from 'react';
import { mount } from 'enzyme';
import FieldsCss from '@xo-union/tk-component-fields/src/css';
import DropdownItem from './';

describe('<DropdownItem>', () => {
  describe('.value', () => {
    it('returns the set value', () => {
      const subject = mount(<DropdownItem value="test" label="test-1" />);

      expect(subject.instance().value).toBe('test');
    });

    it('otherwise falls back to the given label', () => {
      const subject = mount(<DropdownItem label="test-1" />);

      expect(subject.instance().value).toBe('test-1');
    });
  });

  describe('.isSelected', () => {
    describe('when isSelected prop is true', () => {
      it('returns true', () => {
        const subject = mount(<DropdownItem label="test" isSelected />);
        expect(subject.instance().isSelected).toBe(true);
      });
    });

    describe('when value matches the selectedValue from context', () => {
      it('returns true', () => {
        const subject = mount(<DropdownItem label="test" />, {
          context: {
            selectedValue: 'test'
          }
        });

        expect(subject.instance().isSelected).toBe(true);
      });
    });

    describe('when value doesnt match the selectedValue from context', () => {
      it('returns false', () => {
        const subject = mount(<DropdownItem label="test" />, {
          context: {
            selectedValue: 'anotherVal'
          }
        });

        expect(subject.instance().isSelected).toBe(false);
      });
    });
  });

  describe('on mousedown', () => {
    it('updates the dropdown value', () => {
      const updateDropdownSpy = jasmine.createSpy('update dropdown');
      const subject = mount(<DropdownItem label="test-value" />, {
        context: {
          updateDropdownValue: updateDropdownSpy
        }
      });

      expect(updateDropdownSpy).not.toHaveBeenCalled();

      subject.simulate('mousedown');

      expect(updateDropdownSpy).toHaveBeenCalledWith('test-value');
    });
  });

  describe('when item is selected', () => {
    it('uses the selected item class', () => {
      const subject = mount(<DropdownItem label="test-value" isSelected />);
      const li = subject.find('li').node;

      expect(li.classList).toContain(...FieldsCss.dropdownItemIsSelected.split(' '));
    });
  });

  describe('when item is not selected', () => {
    it('does not use the selected item class', () => {
      const subject = mount(<DropdownItem label="test-value" />);
      const li = subject.find('li').node;

      expect(li.classList).toContain(...FieldsCss.dropdownItem.split(' '));
    });
  });
});
