'use strict'

const maxSubarraySum = ( arr, num)=>{
    if(num > arr.length) return null

    let max = -Infinity;
    for(let i = 0; i< arr.length - num + 1; i++){
       let temp = 0;
        for(let j =0 ; j< num;j++){
            temp += arr[i +j];

        }
        if(temp > max){
            max = temp;
        }

    }
    return max;
}
// Time complexity ---> O(N^2)
const result1 = maxSubarraySum([1,2,5,2,8,1,5],2) // 10
const result2 = maxSubarraySum([1,2,5,2,8,1,5],4) // 17
const result3 = maxSubarraySum([4,2,1,6],1) // 6

const result4 = maxSubarraySum([4,2,1,6,2],4) // 13
const result5 = maxSubarraySum([],4) //null

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
