/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const commands = new Set([
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ]);

  const items = arr.map((value) => ({
    value,
    count: commands.has(value) ? 0 : 1,
    isCommand: commands.has(value),
  }));

  arr.forEach((value, index) => {
    if (!commands.has(value)) {
      return;
    }

    const isNextCommand =
      value === '--discard-next' || value === '--double-next';

    const targetIndex = isNextCommand ? index + 1 : index - 1;
    const target = items[targetIndex];

    if (!target || target.isCommand || target.count === 0) {
      return;
    }

    if (value === '--discard-next' || value === '--discard-prev') {
      target.count = 0;
    } else {
      target.count += 1;
    }
  });

  return items.reduce((result, item) => {
    if (item.isCommand || item.count === 0) {
      return result;
    }

    return result.concat(Array(item.count).fill(item.value));
  }, []);
}

module.exports = {
  transform,
};
