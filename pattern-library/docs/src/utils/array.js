import splitArray from 'split-array';

export function toGroups(array, numberOfBuckets) {
  const bucketSize = Math.ceil(array.length / numberOfBuckets);

  return splitArray(array, bucketSize);
}
