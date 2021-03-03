const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  getLength() {
    let len = this.chain.length;
    this.chain = [];
    return len;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push('');
    } else {
      this.chain.push(''+value);
    }
    return this;
  },
  removeLink(position) {
    if ((position > this.chain.length) || (!Number.isInteger(position))) {
      this.chain = [];
      throw Error('');
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let finish = this.chain.map(a => '( '+a+' )').join('~~');
    this.chain = [];
    return finish;
  }
};

module.exports = chainMaker;
