'use strict';
// Bubble sort



const BubbleSort = (arr) =>{
    
    let count = 0
    for(let i = arr.length; i> 0; i--){
        let noSwap = true;
        for(let j=0;j < i - 1;j++){
            // console.log(j , j+1);
            console.log(arr, arr[j], arr[j + 1]);
            if(arr[j] > arr[j + 1]){
               [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
               noSwap = false;
            }
        }
        count += 1;
        console.log( count + ' pass complete');
        if(noSwap) break;
    }

    return arr
}

// i = 6

// j = 0;

// [37, 45, 8, 12, 88, -3]
//  _   _

//  j = 1

//  [37, 8, 45, 12, 88, -3]

//  "One pass complete"
//        _  _
    
// j = 2

// [37, 8, 12, 45,88, -3 ]

// "One pass complete"

// j= 3

// [37, 8, 12, 45, 88, -3]

// j = 4

// [37, 8, 12, 45, -3, 88]

// "one pass complete"

// i = 5

// j = 0

// [8, 37, 12, 45, -3, 88]

// "one Pass complete"





// const BubbleSort = (arr) =>{
    
//     for(let i = 0; i< arr.length; i++){
//         for(let j=0;j< arr.length - 1;j++){
//             // console.log(j , j+1);
//             console.log(arr, arr[j], arr[j + 1]);
//             if(arr[j] > arr[j + 1]){
//                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//                console.log('one pass complete');
//             }
//         }
//     }

//     return arr

// }


const arr = [8,1,2,3,4,5,6,7]
const result = BubbleSort(arr)
console.log(result);












[8,46346,,7537,]