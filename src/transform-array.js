const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (Array.isArray(arr)){
    let map = {};
    let addToMap = function(idx, action){
      if (idx in map) {
        let current = map[idx];
        if ((action > 0) && (current == 0)){
          map[idx] = 0;
        } else if ((action == 0) && (current > 1)) {
          map[idx] = current - 1;
        } else if (action > 0) {
          map[idx] = current + action;
        }
      } else {
        if (action == 0)  {
          map[idx] = 0;
        } else {
          map[idx] = 1 + action;
        }
      }
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      if (current === '--discard-prev') {
        addToMap(i, 0);
        addToMap(i-1, 0);
      }else if (current === '--double-prev') {
        addToMap(i, 0);
        addToMap(i-1, 1);
      }else if (current === '--discard-next') {
        addToMap(i, 0);
        addToMap(i+1, 0)
      }else if (current === '--double-next') {
        addToMap(i, 0);
        addToMap(i+1, 1);
      }
    }
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      if (map[i] !== undefined) {
        let action = map[i];
        if (action > 0){
          for (let rep = 0; rep < action; rep++) {
            result.push(current);
          }
        }
      } else {
        result.push(current);
      }
    }
    return result;
  }
  throw Error('Ooops...');
};
