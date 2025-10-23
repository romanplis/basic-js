const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arr1 = arr.filter(element => element != -1);
  arr1.sort((a, b) => a - b);
  let arr2 = [];

  arr.forEach(element => {
    element == -1 ? arr2.push(-1) : arr2.push(arr1.shift());
  });
  return arr2;
}

arr = [-1, 150, 190, 170, -1, -1, 160, 180];
sortByHeight(arr);

module.exports = {
  sortByHeight
};
