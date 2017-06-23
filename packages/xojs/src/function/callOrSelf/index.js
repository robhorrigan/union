/**
 * Calls object in LHS if it is a function, otherwise, it returns LHS.
 *
 * NOTE: It assumes the function does not need to be bound to anything.
 */
export default function callOrSelf(...params) {
  return typeof this === 'function' ? this(...params) : this;
}
