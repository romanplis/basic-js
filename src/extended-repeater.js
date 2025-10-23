const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, 
 *                      separator: '**', 
 * 
 *                      addition: 'PLUS', 
 *                      additionRepeatTimes: 3, 
 *                      additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *     STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS
 * => 'STRING PLUS 00 PLUS 00 PLUS ** STRING PLUS 00 PLUS 00 PLUS ** STRING PLUS 00 PLUS 00 PLUS'
 *
 */

function repeater(str, options) {
  str = String(str);

  let separator = options.separator !== undefined ? options.separator : '+';
  let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';
  let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  let addition = options.addition !== undefined ? String(options.addition) : '';

  let arr1 =[];
  let arr2 = [];
  let str1 = "";
  let str2 = "";

  for (let i = 0; i < additionRepeatTimes; i++) {
    arr2.push(addition.toString());
    arr2.push(additionSeparator.toString());
  }
  arr2.pop();
  str2 = arr2.join("");

  for (let j = 0; j < repeatTimes; j++) {
    arr1.push(str);
    arr1.push(str2);
    arr1.push(separator.toString());
  }
  arr1.pop();
  str1 = arr1.join("");

  return str1;
}
// repeater('STRING', { repeatTimes: 3, 
//  separator: '**', 
//  addition: 'PLUS', 
//  additionRepeatTimes: 3, 
//  additionSeparator: '00' });


module.exports = {
  repeater
};
