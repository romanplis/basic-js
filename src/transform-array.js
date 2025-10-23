const { NotImplementedError } = require('../lib');

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
    throw new Error ("\'arr\' parameter must be an instance of the Array!");
  }

  if (arr.length === 0) {
    return [];
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--double-next') {
      if (i + 1 < arr.length) {
        result.push(arr[i + 1]);
      }      
    }

    if (arr[i] == '--double-prev') {
      if (arr[i - 2] !== '--discard-next') {
        if (i - 1 > 0) {
          result.push(arr[i - 1]);
        } 
      }           
    }

    if (arr[i] == '--discard-prev') {
      if (arr[i - 2] !== '--discard-next') {
        if (i - 1 > 0) {
          result.pop();
        } 
      }           
    }

    if (arr[i] == '--discard-next') {
      i++;
      continue;     
    }

    if (typeof arr[i] === 'number') {
      result.push(arr[i]);
    }
  }
  console.log(result);
  return result;
}

// transform([1, 2, 3, '--double-next', 4, 5]);
// transform([1, 2, 3, '--discard-prev', 4, 5]);
transform(['--discard-prev', 1, 2, 3]);

module.exports = {
  transform
};
