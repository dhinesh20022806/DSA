'use strict'

// const cutoff = (arr,start = 0, end = arr.length -1) =>{
//     const result = [];
//     for(let i = start; i <= end; i++){
//         result.push(arr[i])
//     }
//     return result;
// }

// console.log(cutoff([1,2,3,4,5,6,7,9],1,2));


const mergeSort = arr =>{
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right))
}



const merge = (arr1,arr2) =>{

    let left = 0;
    let right = 0;
    const result = [];

    while(left < arr1.length && right < arr2.length){

        if(arr1[left] < arr2[right]){
            result.push(arr1[left]);
            left++
        }
        else{
            result.push(arr2[right])
            right++
        }
    }
    return result.concat(arr2.slice(right), arr1.slice(left));
}

console.log(mergeSort([13,12,24,23]));