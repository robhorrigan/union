import createReducers from '../';
import { initializeField } from '@actions/fields';
import { coreValidators } from '@xo-union/tk-component-fields/lib/validations';

const DEFAULT_TEST_FORM_NAME = 'form-a';
const DEFAULT_TEST_FORM = '@xo-union/tk-component-fields/form-state(form-a)';

function createWithDefaultConfigs() {
  return createReducers([
    {
      name: DEFAULT_TEST_FORM_NAME,
      validators: coreValidators
    }
  ]);
}

describe('createReducer integration test', () => {
  describe('created reducer', () => {
    describe('on INITIALIZE_FIELD', () => {
      it('initializes the field', () => {
        const { [DEFAULT_TEST_FORM]: reducer } = createWithDefaultConfigs();
        const initialState = {
          fields: {}
        };

        const initializeFieldAction = initializeField({
          formName: DEFAULT_TEST_FORM_NAME,
          fieldName: 'email',
          value: '',
          onValidState: 'valid',
          enabledValidators: {
            required: true
          }
        });

        const newState = reducer(initialState, initializeFieldAction);

        expect(newState).toEqual({
          fields: {
            email: {
              config: {
                onValidVisualState: 'valid',
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
              },
              ui: {
                currentErrorMessage: '',
                visualState: 'neutral'
              }
            }
          }
        });
      });
    });
  });
});
