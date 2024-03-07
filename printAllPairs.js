'use strict';
function printAllPairs(n){
    for(let i = 0;i <= n; i++){
        for(let j = 0;j <= n; j++){
            // console.log(i,j);
        }
    }
}
const time1 = performance.now();
printAllPairs(10);

const time2 = performance.now();

console.log(`${((time2 - time1) / 1000).toFixed(2) } sec`);