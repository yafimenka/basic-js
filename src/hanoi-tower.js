const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  if ((Number.isInteger(disksNumber) === false) || (Number.isFinite(turnsSpeed) === false)) {
    throw Error();
  }
  let rounds = 0;
  if (disksNumber > 0) {
    let others = calculateHanoi(disksNumber-1, turnsSpeed);
    rounds = 1 + 2 * others.turns;
  }
  let time = Math.floor(3600 * rounds / turnsSpeed) ;
  return {'turns': rounds, 'seconds': time}
};
