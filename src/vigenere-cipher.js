const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(rev) {
    this.reverse = (rev === false);
  }
  encrypt(word, key) {
    if ((word === undefined) || (key === undefined)) {
      throw Error('Wrong parameters');
    }
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let keyCounter = {
      counter : 0,
      shift : function() {
        if (this.counter === key.length){
          this.counter = 0;
        }
        return key[this.counter++];
      }
    }
    let fun = function(sym) {
      let getPosition = function(s) {
        return abc.indexOf(s.toUpperCase());
      }
      let result = '';
      if (!abc.includes(sym.toUpperCase())) {
        result = sym;
      } else {
        let newIdx = (getPosition(sym) + getPosition(keyCounter.shift())) % abc.length;
        result = abc[newIdx];
      }
      return result;
    }
    let result = word.split('').map(fun);
    if (this.reverse) {
      result = result.reverse();
    }
    return result.join('');
  }

  decrypt(word, key) {
    if ((word === undefined) || (key === undefined)) {
      throw Error('Wrong parameters');
    }
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let keyCounter = {
      counter : 0,
      shift : function() {
        if (this.counter === key.length){
          this.counter = 0;
        }
        return key[this.counter++];
      }
    }
    let fun = function(sym) {
      let getPosition = function(s) {
        return abc.indexOf(s.toUpperCase());
      }
      let result = '';
      if (!abc.includes(sym.toUpperCase())) {
        result = sym;
      } else {
        let newIdx = (abc.length + getPosition(sym) - getPosition(keyCounter.shift())) % abc.length;
        result = abc[newIdx]
      }
      return result;
    }
    let result = word.split('').map(fun);
    if (this.reverse) {
      result = result.reverse();
    }
    return result.join('');
  }
}

module.exports = VigenereCipheringMachine;
