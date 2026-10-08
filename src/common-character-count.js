/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const characters = {};

  s1.split('').forEach((char) => {
    characters[char] = (characters[char] || 0) + 1;
  });

  return s2.split('').reduce((count, char) => {
    if (characters[char] > 0) {
      characters[char] -= 1;
      return count + 1;
    }

    return count;
  }, 0);
}

module.exports = {
  getCommonCharacterCount,
};
