/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((row, rowIndex) =>
    row.map((_, columnIndex) => {
      let minesCount = 0;

      for (let rowOffset = -1; rowOffset <= 1; rowOffset += 1) {
        for (let columnOffset = -1; columnOffset <= 1; columnOffset += 1) {
          if (rowOffset === 0 && columnOffset === 0) {
            continue;
          }

          const neighborRow = rowIndex + rowOffset;
          const neighborColumn = columnIndex + columnOffset;

          const isInsideMatrix =
            neighborRow >= 0 &&
            neighborRow < matrix.length &&
            neighborColumn >= 0 &&
            neighborColumn < row.length;

          if (
            isInsideMatrix &&
            matrix[neighborRow][neighborColumn] === true
          ) {
            minesCount += 1;
          }
        }
      }

      return minesCount;
    }),
  );
}

module.exports = {
  minesweeper,
};
