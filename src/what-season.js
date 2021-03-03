const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }
  if (Date.parse(date)) {
    try {
      if (date.toISOString()) {
        let month  = date.getMonth();
        if (Number.isInteger(month)) {
          let season = Math.floor((month + 1) / 3);
          switch (season) {
            case 1: return 'spring';
            case 2: return 'summer';
            case 3: return 'fall';
            default: return 'winter';
          }
        }
      }
    }
    catch (e) {
      throw Error(e);
    }
  }
  throw Error('Ooops...');
};
