'use strict';
const addUptoPerformance = n => (n * (n + 1)) / 2

let t3 = performance.now();
const resultPerformance = addUptoPerformance(6000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
let t4 = performance.now();

console.log(resultPerformance);
console.log((t4 - t3)/ 1000);