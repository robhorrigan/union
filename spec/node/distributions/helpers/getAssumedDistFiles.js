import path from 'path';

export default function getAssumedDistFiles(entrypoints) {
  return entrypoints.map((file) => {
    if (typeof file === 'string') {
      return path.join('lib',
        file.replace(/\.s?css$/, '.cssm').replace(/\.jsx?$/, '.js'));
    }

    return path.join('lib', file.to);
  });
}
