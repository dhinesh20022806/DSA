'use strict';

/**
 * Given two strings, write a function to 
 * determine if the second string is an
 * anagram of the first. An anagram is 
 * a word, phase, or name formed by rearranging
 * the letters of another, such as cinema, formed
 * from iceman
 * 
 * validAnagram(" "," ") true
 * validAnagram('aaz','zza') false
 */

const validAnagram = (str1,str2) =>{
    if(str1.length !== str2.length) return false;

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for(let val of str1) frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;

    for(let val of str2) frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;

    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)) return false;

        if(frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }

    return true;
    

}

console.log(validAnagram(" "," "));
console.log(validAnagram("aaz","zza"));
console.log(validAnagram("anagram","nagaram"));
console.log(validAnagram("rat","car"));
console.log(validAnagram("awesome","awesom"));
console.log(validAnagram("qwerty","qeywrt"));
console.log(validAnagram("texttwisttime","timetwisttext"));