const { NotImplementedError } = require('../lib');

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
  let numberString = n.toString();

  let numberArr = numberString.split('');

  let newArr = [];
  for (let i = 0; i < numberArr.length; i++) {
      let tempArr = [...numberArr];
      tempArr.splice(i, 1);
      newArr.push(+tempArr.join(''));
  }
  let max = Math.max(...newArr);

  return max;
}

module.exports = {
  deleteDigit
};
