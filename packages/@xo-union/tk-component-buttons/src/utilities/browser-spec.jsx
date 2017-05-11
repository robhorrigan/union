import styles from '@xo-union/tk-component-buttons/src/css';
import { processProps } from './';

describe('<Button>', () => {
  describe('#processProps', () => {
    describe('default', () => {
      it('creates the right class list', () => {
        const result = processProps({});

        expect(result.className).not.toContain('undefined');
        expect(result.className).toContain(styles.btn);
        expect(result.className).toContain(styles.papa);
        expect(result.className).toContain(styles.primary);
      });
    });

    describe('size', () => {
      it('creates the right class list', () => {
        const result = processProps({ size: 'mama' });

        expect(result.className).not.toContain('undefined');
        expect(result.className).toContain(styles.mama);
      });
    });

    describe('color', () => {
      it('creates the right class list', () => {
        const result = processProps({ color: 'primary' });

        expect(result.className).not.toContain('undefined');
        expect(result.className).toContain(styles.primary);
      });
    });

    describe('block', () => {
      describe('when true', () => {
        it('assigns the block class', () => {
          const result = processProps({ block: true });

          expect(result.className).not.toContain('undefined');
          expect(result.className).toContain(styles.block);
        });
      });

      describe('when it is a string', () => {
        it('assigns the block class', () => {
          const result = processProps({ block: 'xs' });

          expect(result.className).not.toContain('undefined');
          expect(result.className).toContain(styles['block-xs']);
        });
      });
    });

    describe('additional props', () => {
      it('are passed along', () => {
        const result = processProps({ test: 'test' });

        expect(result.test).toEqual('test');
      });
    });
  });
});
