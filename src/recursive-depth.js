/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    return arr.reduce((maxDepth, item) => {
      if (!Array.isArray(item)) {
        return maxDepth;
      }

      return Math.max(maxDepth, 1 + this.calculateDepth(item));
    }, 1);
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
