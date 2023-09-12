const assert = require('assert');

// Expected Behavior: Count Letters for each of the name in the array of object

const countLetters = (arr) => {
  return arr.map(x => x.name.length)
}

/* 
  Add test cases below
*/



console.log("All Tests Passed.")
