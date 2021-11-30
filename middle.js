const middle = function(array) {
  let result = [];
  let i = array.length;
  if (i > 2 && (i % 2 === 0)) {
    result.push(array[(i / 2) - 1]);
    result.push(array[(i / 2)]);
  }
  if (i > 2 && (i % 2 !== 0)) {
    result.push(array[(i - 1) / 2]);
  }
  return result;
};

module.exports = (middle);