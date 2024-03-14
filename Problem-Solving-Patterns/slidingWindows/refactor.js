'use strict';
// arr = 7 num = 2
const maxSubarraySum = (arr,num)=>{
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0;i < num; i++){
        maxSum += arr[i];
    }
    // tempSum = 3
    tempSum = maxSum;
    // i = 2 & num = 2 temp = -3, maxSum = 3
    // i = 3 & num = 2 temp = 1, maxSum = 3
    // i = 4 & num = 2 temp = 
    // i = 5 & num = 2
    // i = 6 & num = 2
    for(let i = num; i< arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum,tempSum);

    }
    return maxSum;
}
const result4 = maxSubarraySum([4,2,1,6,2],4) // 13
const result1 = maxSubarraySum([1,2,5,2,8,1,5],2) // 10 
const result2 = maxSubarraySum([1,2,5,2,8,1,5],4) // 17
const result3 = maxSubarraySum([4,2,1,6],1) // 6

const result5 = maxSubarraySum([],4) //null

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);