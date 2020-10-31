
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let hiVal = 0;
  let lowVal = 0;

  if (fromN > toN) {
    hiVal = fromN;
    lowVal = toN;
  } else {
    hiVal = toN;
    lowVal = fromN;
  }
  // Counts Down-----------------
  if (hiVal === lowVal) { // <<< BASE CASE
    return lowVal;
  }

  return hiVal + sum((hiVal - 1), lowVal); // << RECURSION CASE
}

module.exports = sum;
