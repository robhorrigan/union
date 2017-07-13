import keep from 'xojs/lib/object/keep';

export default function errorsReducer({ config }, { meta, payload }, validators) {
  const errors = [];
  const { fieldName } = meta;
  const { value } = payload.model;
  const { enabledValidators } = config;

  Object.keys(enabledValidators).forEach((validatorName) => {
    const validatorConfig = enabledValidators[validatorName];
    const { validate, createMessage } = validators[validatorName];

    if (!validate(value, validatorConfig)) {
      errors.push({
        validator: validatorName,
        message: createMessage(fieldName, value, validatorConfig)
      });
    }
  });

  return errors;
}
