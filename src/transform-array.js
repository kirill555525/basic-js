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

  const commands = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];

  const items = arr.map((value) => ({
    value,
    count: commands.includes(value) ? 0 : 1,
    isCommand: commands.includes(value),
  }));

  arr.forEach((value, index) => {
    const isDiscardNext = value === '--discard-next';
    const isDiscardPrev = value === '--discard-prev';
    const isDoubleNext = value === '--double-next';
    const isDoublePrev = value === '--double-prev';

    if (
      !isDiscardNext
      && !isDiscardPrev
      && !isDoubleNext
      && !isDoublePrev
    ) {
      return;
    }

    const targetIndex =
      isDiscardNext || isDoubleNext
        ? index + 1
        : index - 1;

    const target = items[targetIndex];

    if (!target || target.isCommand || target.count === 0) {
      return;
    }

    if (isDiscardNext || isDiscardPrev) {
      target.count -= 1;
    }

    if (isDoubleNext || isDoublePrev) {
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
