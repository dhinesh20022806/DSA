'use strict';

function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num - 1)
}

console.log(factorial(5));

function factorialNaive(num){
    let total = 1;
    for(let i = num; i > 0; i--){
        total *= i;
    }
    return total;
}