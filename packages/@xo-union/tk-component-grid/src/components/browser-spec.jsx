import React from 'react';
import { mount } from 'enzyme';
import { Column } from './';
import { classString } from '@tests/support/enzyme-component';
import bsGrid from '@xo-union/tk-css-bootstrap/lib/grid';

describe('<Column>', () => {
  describe('xs', () => {
    describe('flag', () => {
      it('assigns the col class', () => {
        const subject = mount(<Column xs />);

        expect(subject.find('div')::classString()).toBe(bsGrid.col);
      });
    });

    describe('number', () => {
      it('assigns the col class', () => {
        const subject = mount(<Column xs="1" />);

        expect(subject.find('div')::classString()).toBe(bsGrid['col-1']);
      });
    });
  });

  describe('sm', () => {
    describe('flag', () => {
      it('assigns the col-sm class', () => {
        const subject = mount(<Column sm />);

        expect(subject.find('div')::classString()).toBe(bsGrid['col-sm']);
      });
    });

    describe('number', () => {
      it('assigns the col class', () => {
        const subject = mount(<Column sm="1" />);

        expect(subject.find('div')::classString()).toBe(bsGrid['col-sm-1']);
      });
    });
  });

  describe('md', () => {
    describe('flag', () => {
      it('assigns the col-md class', () => {
        const subject = mount(<Column md />);

        expect(subject.find('div')::classString()).toBe(bsGrid['col-md']);
      });
    });

    describe('number', () => {
      it('assigns the col class', () => {
        const subject = mount(<Column md="1" />);

        expect(subject.find('div')::classString()).toBe(bsGrid['col-md-1']);
      });
    });
  });

  describe('lg', () => {
    describe('flag', () => {
      it('assigns the col-lg class', () => {
        const subject = mount(<Column lg />);

        expect(subject.find('div')::classString()).toBe(bsGrid['col-lg']);
      });
    });

    describe('number', () => {
      it('assigns the col class', () => {
        const subject = mount(<Column lg="1" />);

        expect(subject.find('div')::classString()).toBe(bsGrid['col-lg-1']);
      });
    });
  });

  describe('xl', () => {
    describe('flag', () => {
      it('assigns the col-xl class', () => {
        const subject = mount(<Column xl />);

        expect(subject.find('div')::classString()).toBe(bsGrid['col-xl']);
      });
    });

    describe('number', () => {
      it('assigns the col class', () => {
        const subject = mount(<Column xl="1" />);

        expect(subject.find('div')::classString()).toBe(bsGrid['col-xl-1']);
      });
    });
  });
});
