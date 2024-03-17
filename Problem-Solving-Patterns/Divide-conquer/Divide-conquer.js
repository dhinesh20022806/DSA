'use strict';


const search = (array, target)=>{

    
   let min = 0;
   let max = array.length -1 ;

   while (min <= max){
    let middle = Math.floor((min + max) / 2)
    let currentElement = array[middle];

    if (array[middle] < target){
        min = middle + 1;
    }
    else if (array[middle] > target){
        max = middle - 1;
    }
    else {
        return middle;
    }
   }

   return -1;



}

console.log(search([1,2,3,4,5,6],6));