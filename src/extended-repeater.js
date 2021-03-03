const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let arrAddWord = [];
  let addTimes = options['additionRepeatTimes'] || 1;
  let addition = '';
  if ('addition' in options) {
    addition  = options['addition'];
  }
  let addSeparator = options['additionSeparator'] || '|';
  for (let i = 0; i < addTimes; i++) {
    arrAddWord.push(''+addition);
  }
  let word = ''+str+arrAddWord.join(addSeparator);
  let arrString = [];
  let times = options['repeatTimes'] || 1;
  let separator = options['separator'] || '+';
  for (let i = 0; i < times; i++) {
    arrString.push(''+word);
  }
  return arrString.join(separator);
};
  