const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 0;
    if (Array.isArray(arr)) {
      if (arr.length == 0) {
        maxDepth = 1;
      } else {
        for (let i = 0; i < arr.length; i++) {
          maxDepth = Math.max(maxDepth, 1 + this.calculateDepth(arr[i]));
        }
      }
    }
    return maxDepth;
  }
};