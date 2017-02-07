import React, { PropTypes } from 'react';
import { mount } from 'enzyme';
import { Dropdown } from '#/fields/components';

describe('<Dropdown>', () => {
  describe('input', () => {
    function getInputNode(props) {
      return mount(<Dropdown {...props} />).find('input').node;
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

    it('configures the placeholder (This is needed to by the :placeholder-shown css pseudo selector)', () => {
      const subject = getInputNode({ name: 'test-1' });

      expect(subject.placeholder).toBe(' ');
    });

    it('sets the field as read-only', () => {
      const subject = getInputNode({ name: 'test-1' });

      expect(subject.getAttribute('readonly')).toBe('');
    });

    it('allows setting the value', () => {
      const subject = getInputNode({ name: 'test-1', value: 'value' });

      expect(subject.value).toBe('value');
    });
  });

  describe('label', () => {
    function getLabel(props) {
      return mount(<Dropdown {...props} />).find('label').node;
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
  })

  describe('context', () => {
    /*
    * Couldnt find a beter way to test the context...
    * This mock renders the selected value from the context and passes along the callback to update
    * the dropdown
    * */
    function DropdownItemMock({ onClick }, { selectedValue, updateDropdownValue }) {
      return <span onClick={() => { onClick({ updateDropdownValue }) }} >{selectedValue}</span>;
    }
    DropdownItemMock.contextTypes = {
      selectedValue: PropTypes.string,
      updateDropdownValue: PropTypes.func
    }

    it('provides the selected value via context', () => {
      const subject = mount(
        <Dropdown name="test-1" value="given-value">
          <DropdownItemMock />
        </Dropdown>
      );

      expect(subject.find(DropdownItemMock).text()).toBe('given-value');
    });

    describe('when updateDropdownValue callback is called', () => {
      it('provides a function to update the dropdown value', () => {
        const subject = mount(
          <Dropdown name="test-1" value="given-value">
            <DropdownItemMock onClick={({ updateDropdownValue }) => updateDropdownValue('new-value') } />
          </Dropdown>
        );

        subject.find(DropdownItemMock).simulate('click');

        expect(subject.state().value).toBe('new-value');
      });

      it('calls the onSelect callback', () => {
        const onSelectSpy = jasmine.createSpy('onSelect');
        const subject = mount(
          <Dropdown name="test-1" value="given-value" onSelect={onSelectSpy}>
            <DropdownItemMock onClick={({ updateDropdownValue }) => updateDropdownValue('new-value') } />
          </Dropdown>
        );

        expect(onSelectSpy).not.toHaveBeenCalled();

        subject.find(DropdownItemMock).simulate('click');

        expect(onSelectSpy).toHaveBeenCalled();
      });
    });
  });
});
