const subtract = require("./subtract");

function subtractOne(num) {
  return subtract(num, 1);
}

function subtractFive(num) {
  return subtract(num, 5);
}

function subtractTen(num) {
  return subtract(num, 10);
}

module.exports.subtractOne = subtractOne;
module.exports.subtractFive = subtractFive;
module.exports.subtractTen = subtractTen;