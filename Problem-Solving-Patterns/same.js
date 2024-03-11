"use strict";

// ======================================================================================
/**
 * 1. Write a function called same, which accepts two arrays. The function should return true, 
 * if every value in the array has it's corresponding
 * value squared in second array. The frequency of value must be same.
 * 
 // ======================================================================================
 * same([1,2,3],[4,1,9]) true
 * 
 * same([1,2,3],[1,9]) false
 * 
 * same([1,2,1],[4,4,1]) false
 * 
 *
 */


/** +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * 
 *  understand the problem  restate the words
 *  find the squared number in the second array
 * 
 * 
 * {
 *  0 : 4,
 *  1 : 1,
 *  2 : 9
 *
 * }
 *  
 * 
 */


// const same = (arr1,arr2) =>{
//     // create hash map ds store key : value as second array position : value 
//     // create a for loop run the 1st array 
//     // create a for loop run the 2nd array
//     // if arr1[i] * 2 === arr2[j]  if   j NOT in hashMap  hashMap[j] = arr2[j]


//     // for loop arr2 i 
//     // hashMap[i] = arr2[i]

//     // for loop arr1 i 

//     if(arr1.length !== arr2.length) return false;

//     const frequencyArr1 = {};
//     const frequencyArr2 = {};

//     for(let key of arr1) {
//         frequencyArr1[key ** 2] = (frequencyArr1[key **2] || 0) + 1; 
//     }

//     for(let key of arr2) frequencyArr2[key] = (frequencyArr2[key] || 0) + 1;

//     for(let key in frequencyArr1){
//         if(!(key in frequencyArr2)) return false;

//         if(frequencyArr1[key] !== frequencyArr2[key]) return false;
//     }

//     return true;
// }

// console.log(same([1,2,3],[4,1,9]));
// console.log(same([1,2,3],[1,9]));
// console.log(same([1,2,1],[4,4,1]));


// A Naive Solution

 