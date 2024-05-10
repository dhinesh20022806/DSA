'use strict';
// Quick Sort

// Pivot Helper

/**
 * In order to 
 */

// const pivot = (arr, start=0, end = arr.length -1 )=>{


    
//     const fistElement = arr[start]
//     let positionIndex = 1;
//     for(let i = 1; i < arr.length; i++){

//         if(fistElement > arr[i]){
//             [arr[positionIndex], arr[i]] = [arr[i], arr[positionIndex]]
//             positionIndex++
//         }

//     }
// console.log(positionIndex);
//   [arr[start], arr[positionIndex -1]] = [arr[positionIndex -1], arr[start]]

//     return arr

    
// }


// const arr = [5, 2, 1, 8, 4, 7, 6, 3]
// console.log(pivot(arr));


const pivot = (arr, start=0, end=arr.length -1) =>{
    let pivot = arr[start]
    let swapIdx = start;

    for(let i = start + 1; i <= end; i++){
        if(pivot > arr[i]) {
            swapIdx++;
            [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
        }
    }
    
    [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]]
    // console.log(arr, '---- ');
    return swapIdx;
}

// console.log(pivot([4,8,2,1,5,7,6,3]));

const quickSort = (arr, left=0, right=arr.length -1)=>{

   if(left < right){
    const pivotIndex = pivot(arr,left,right);

    quickSort(arr,left,pivotIndex - 1);
    quickSort(arr,pivotIndex+1,right)

   }

   return arr

}

const arr = [5, 2, 1, 8, 4, 7, 6, 3]

// [2,1,4,8,23,67,88,53,45]
// [...]
// 1,2,8,4,23
//1,2,4,8,23

console.log(quickSort(arr));




