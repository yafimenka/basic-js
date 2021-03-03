const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let numberOfCats = 0;
  if (Array.isArray(matrix)) {
    for (let i = 0; i < matrix.length; i++){
      numberOfCats += countCats(matrix[i]);
    }
  } else if (matrix == "^^") {
    numberOfCats = 1;
  }
  return numberOfCats;
};
