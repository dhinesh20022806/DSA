"use strict";
const sum = arr => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) total += arr[i];
  return total;
};

const total = sum([1, 2, 3, 4]);
console.log(total);

/** total one variable, i one variable, O(2) means O(1) */