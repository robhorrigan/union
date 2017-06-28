import DefaultPropTypes from 'prop-types';

export const TRACKABLE_PROPS = [
  'data-trackable-group',
  'data-trackable',
  'data-trackable-selection'
];

export function createTrackableProps({ selection, group } = {}) {
  const props = {};

  if (group) {
    props['data-trackable-group'] = group;
  }

  if (selection) {
    props['data-trackable-selection'] = selection;
  } else {
    props['data-trackable'] = true;
  }

  return props;
}

export const PropTypes = {
  trackableProps: DefaultPropTypes.shape({
    selection: DefaultPropTypes.string,
    group: DefaultPropTypes.string
  })
};
