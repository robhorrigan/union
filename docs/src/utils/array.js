import splitArray from 'split-array';

// eslint-disable-next-line import/prefer-default-export
export function toGroups(numberOfBuckets) {
  const bucketSize = Math.ceil(this.length / numberOfBuckets);

  return splitArray(this, bucketSize);
}
