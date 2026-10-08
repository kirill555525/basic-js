/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = String(n);

  return digits
    .split('')
    .map((_, index) => Number(digits.slice(0, index) + digits.slice(index + 1)))
    .reduce((max, value) => Math.max(max, value), -Infinity);
}

module.exports = {
  deleteDigit,
};
