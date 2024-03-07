// function addUpto(n){
//     let total = 0;
//     for(let i = 0;i<=n;i++){
//       total+=i
//     }
//     return total;
//   }
  
//   let t1 = performance.now();
//    const result = addUpto(6000000000);
//   let t2 = performance.now();
  
//   console.log((t2 - t1) / 1000 )
  
//   console.log(result);

//   performance base

const addUptoPerformance = n => (n * (n + 1)) / 2

let t3 = performance.now();
const resultPerformance = addUptoPerformance(6000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
let t4 = performance.now();

console.log(resultPerformance);
console.log((t4 - t3)/ 1000);