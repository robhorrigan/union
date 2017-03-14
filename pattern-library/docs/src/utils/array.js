import splitArray from 'split-array';

export function toGroups(numberOfBuckets) {
  const bucketSize = Math.ceil(this.length / numberOfBuckets);

  return splitArray(this, bucketSize);
}
