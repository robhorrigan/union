import { EOL } from 'os';
import ColoredString from '../ColoredString';

const RENAMED_MODIFIED = 'renamed-modified';
const COPIED_MODIFIED = 'copied-modified';
const MODIFIED = 'modified';
const CREATED = 'created';
const DELETED = 'deleted';
const UNMERGED = 'unmerged';
const UNKNOWN = 'unknown';

function diffStatusMap(status) {
  if (status.indexOf('R') === 0) {
    return RENAMED_MODIFIED;
  }

  if (status.indexOf('C') === 0) {
    return COPIED_MODIFIED;
  }

  if (status === 'M') {
    return MODIFIED;
  }

  if (status === 'A') {
    return CREATED;
  }

  if (status === 'D') {
    return DELETED;
  }

  if (status === 'U') {
    return UNMERGED;
  }

  return UNKNOWN;
}

function diffStatusColorRules(value) {
  if (value.indexOf(RENAMED_MODIFIED) >= 0 || value.indexOf(COPIED_MODIFIED) >= 0) {
    return 'yellow';
  }

  if (value === DELETED || value === UNMERGED) {
    return 'red';
  }

  if (value === UNKNOWN) {
    return 'black';
  }

  return 'green';
}

export default function parseDiff(diffString) {
  return diffString.split(EOL).map((statusAndName) => {
    const [status, originalName, newName] = statusAndName.split(/\s+/);
    const verboseStatus = diffStatusMap(status);

    if (verboseStatus === RENAMED_MODIFIED || verboseStatus === COPIED_MODIFIED) {
      return {
        typeOfChange: `${verboseStatus} -- from: ${originalName}`,
        name: newName
      };
    }

    return { typeOfChange: verboseStatus, name: originalName };
  });
}

export function withColors(diffString) {
  return parseDiff(diffString).map(({ typeOfChange, name }) => {
    const color = diffStatusColorRules(typeOfChange);

    return { name, typeOfChange: new ColoredString(typeOfChange, color) };
  });
}
