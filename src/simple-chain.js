const links = [];

const chainMaker = {
  getLength() {
    return links.length;
  },

  addLink(...args) {
    const value = args.length === 0 ? '' : String(args[0]);

    links.push(value);

    return this;
  },

  removeLink(position) {
    const isValidPosition =
      Number.isInteger(position) &&
      position > 0 &&
      position <= links.length;

    if (!isValidPosition) {
      links.length = 0;
      throw new Error("You can't remove incorrect link!");
    }

    links.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    links.reverse();

    return this;
  },

  finishChain() {
    const result = links.map((value) => `( ${value} )`).join('~~');

    links.length = 0;

    return result;
  },
};

module.exports = {
  chainMaker,
};
