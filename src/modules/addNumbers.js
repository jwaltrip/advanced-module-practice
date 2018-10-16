const add = require("./add");

function addTen(num) {
  return add(num,10);
}

function addFive(num) {
  return add(num, 5);
}

function addOne(num) {
  return add(num, 1);
}

module.exports.addTen = addTen;
module.exports.addFive = addFive;
module.exports.addOne = addOne;