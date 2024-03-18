'use strict';

const binarySearch = (array,target)=>{

    let left = 0;
    let right = array.length -1

   let count = 0;
    while(left <= right){
        let mid = (left + right) >> 1
        // console.log(++count);
        // let mid = Math.floor((left + right)/2)
        if(array[mid] === target) return mid
        else if (array[mid] > target) right = mid - 1
        else if (array[mid] < target) left = mid + 1
        
    }
    return -1

}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],10));

// O (log n) worst case

// O (1) best case

//  2|_ 10 -> 5
//  2|_ 5 -> 2
//  2|_ 2 -> 1