import { connect } from 'react-redux';
import { updateVisualStateOfAll } from '@actions/fields';
import { isValid } from '@models/form';
import { getFormName } from '@utilities/stateManagement';

function mapStateToProps(state) {
  return {
    isValid: state[getFormName(name)]::isValid()
  };
}

function mapDispatchToProps(dispatch, { name: formName }) {
  return {
    handleInvalidSubmit: () => {
      dispatch(updateVisualStateOfAll({ formName }));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
