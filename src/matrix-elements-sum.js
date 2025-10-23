const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let storage = Array(matrix[0].length).fill(false);

  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (storage[j] === false) {
        sum += matrix[i][j];
        if (matrix[i][j] === 0) {
          storage[j] = true;
        }
      }      
    }
  }

  return sum;
}
// matrix = [
//  [0, 1, 1, 2],
//  [0, 5, 0, 0],
//  [2, 0, 3, 3]
// ];
// getMatrixElementsSum(matrix);


module.exports = {
  getMatrixElementsSum
};
