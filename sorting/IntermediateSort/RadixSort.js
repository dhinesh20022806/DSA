"use strict";

// const getDigit = (num, place)=>{

//     let digit;
//     let num2 = num;
//     for(let i = 0; i <= place; i++){
//         digit = num2 % 10;
//         num2 = Math.floor(num2 / 10)
//     }

//     return digit;

// }

const getDigit = (num, i = 0) =>
  Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

const digitCount = num => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = numArray => {
  let higherDights = 0;

  for (let i = 0; i < numArray.length; i++) {
    // higherDights =
    //   higherDights > digitCount(numArray[i])
    //     ? higherDights
    //     : digitCount(numArray[i]);

    higherDights = Math.max(higherDights, digitCount(numArray[i]))
  }
  return higherDights;
};

const radixSort = num =>{
    let maxDigitCount = mostDigits(num)
    console.log(maxDigitCount);

    for(let k = 0; k< maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => [])
        for(let i = 0; i< num.length; i++){
            digitBuckets[getDigit(num[i], k)].push(num[i]);
        }
        console.log(digitBuckets);
        num = [].concat(...digitBuckets)
    }
    return num
}

console.log(radixSort([9,8,6,4,3,21,1]));;
