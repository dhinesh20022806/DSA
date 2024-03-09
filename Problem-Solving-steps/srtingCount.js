// ===========================================================================================
// write a function which takes in a string and return counts of each character in the string.
// ===========================================================================================

// charCount("aaaa") // {a:4}
// charCount("hello") // {h:1, e:1,l:2,o:1}

// // complex inputs

// "my phone number is 1048587"
// "hello, Hai"
// "$$$$$$$$$$ 5%%%%%%%%%@ 1!!1111144 4623"

// // empty inputs

// charCount("")

// // invalid inputs
// charCount(1325123)
// charCount(false)

function charCount(str) {
  const char = str[i].toLowerCase();
  // make the object to return end
  const result = {};
  // loop over the string, for each string
  for (let i = 0; i < str.length; i++) {

    // if the char is anything else like (space, period, etc) don't do anything
    if(/[a-z0-9]/.test(char)){
    // if the char is a number/symbol AND is key in object, add one to count
    if (result[char] > 0) result[char]++;
    // if the char is number/symbol AND is key not in object , add it to the object and set value 1
    else result[char] = 1;
  }
}


  // return the object
  return result;
}
