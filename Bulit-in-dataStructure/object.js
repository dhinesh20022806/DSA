'use strict';
let instructor = {
    firstName:'dhinesh',
    isInstructor:true,
    favoriteNumber:[1,2,3,4],
}
// unordered key-value pair

console.log(Object.keys(instructor));

// its O(n) if keys grows then arrays also grows

// Big O of Objects methods

/** Object.keys ---> O(n) */
/** Object.entries ---> O(n) */
/** Object.values ---> O(n) */
/** hasOwnProperty ---> O(n) */
