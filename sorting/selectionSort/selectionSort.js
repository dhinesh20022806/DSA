'use strict';

const selectionSort = (arr) =>{
  for(let i = 0; i<arr.length;i++){
    let minIndex = i  
   let minValue = arr[i]
    for(let j = i +1; j< arr.length ; j++){
        console.log('compare', arr[j], minValue);

        // New minium value
            if(arr[j] < minValue){
                minIndex = j;
                minValue = arr[j]
            }
    }

   if(i !== minIndex) {
    console.log("Swap happened");
    [arr[i],arr[minIndex]] = [arr[minIndex], arr[i]];
   }
    
  }

  return arr;


}

console.log(selectionSort([4,3,2,1]));

/**
 * Store the first element as the smallest value you've seen so far. 
 * 
 * compare this item to the next item in the array until you find a smaller number.
 * 
 * if a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
 * 
 * if the "minimum" is not the values (index) you initially began with, swap the two values.
 * 
 * Repeat this with the next element until the array is sorted;
 */