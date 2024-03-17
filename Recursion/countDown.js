'use strict';
function countdown(num) {
    if(num<= 0){
        console.log('All done');
        return;
    }
    console.log(num);
    num--;
    countdown(num)
}
const time1 = performance.now();
countdown(5)
const time2 = performance.now();
console.log(`${((time2 - time1)/1000).toFixed(2)} sec`);