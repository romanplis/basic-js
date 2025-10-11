const { NotImplementedError } = require('../lib');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = n;
  while (sum >= 10) {
      let tempSum = 0;
      let numString = sum.toString();
      for (let i = 0; i < numString.length; i++) {
          tempSum += +numString[i];
      }
      sum = tempSum;
  }
  return sum;
}

module.exports = {
  getSumOfDigits
};
