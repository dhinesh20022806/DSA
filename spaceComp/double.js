'use strict';

const double = arr =>{
    let doubleArr = [];

    for(let i = 0;i< arr.length;i++) doubleArr.push(2 * arr[i])
    return doubleArr;
}

const doubleArr = double([1,2,3,4])

console.log(doubleArr);

/* doubleArr is one variable, i another variable , O(n + 2) here 2 does not matter, if arr length is n then doubleArr length also n which means O(n) space  */