import createReducers from '../';
import { change } from '@actions/fields';
import { coreValidators } from '@xo-union/tk-component-fields/lib/validations';
import { 
  DEFAULT_TEST_FORM,
  DEFAULT_TEST_FORM_NAME,
  createWithDefaultConfigs
} from '@tests/factories';

fdescribe('createReducer integration test', () => {
  describe('created reducer', () => {
    describe('on CHANGE', () => {
      it('updates the field value and runs validations', () => {
        const { [DEFAULT_TEST_FORM]: reducer } = createWithDefaultConfigs();
        const initialState = {
          fields: {
            email: {
              config: {
                enabledValidators: {
                  required: true
                }
              }
            }
          }
        };

        const initializeFieldAction = change({
          formName: DEFAULT_TEST_FORM_NAME,
          fieldName: 'email',
          value: ''
        });

        const newState = reducer(initialState, initializeFieldAction);

        expect(newState).toEqual({
          fields: {
            email: {
              config: {
                enabledValidators: {
                  required: true
                }
              },
              model: {
                value: '',
                errors: [
                  {
                    validator: 'required',
                    message: 'Email is required'
                  }
                ]
              }
            }
          }
        });
      });
    });
  });
});
