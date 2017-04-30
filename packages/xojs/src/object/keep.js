const has = Object.prototype.hasOwnProperty;

/**
 * Remove unwanted keys from 'this'
 *
 * @param {string} ...keys List of keys to keep in clone object
 *
 * @example
 *   const a = { x: 1, y: 2, z: 3 };
 *
 *   console.assert(
 *     keep.call(a, 'x') ===  {x: 1},
 *     'Expected keep to remove unwanted keys');
 */
export default function keep(...keys) {
  const newObject = {};

  keys.forEach((key) => {
    if (this::has(key)) {
      newObject[key] = this[key];
    }
  });

  return newObject;
}
