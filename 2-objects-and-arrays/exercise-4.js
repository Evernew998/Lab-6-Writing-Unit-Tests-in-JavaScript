const assert = require('assert');

// Expected Behavior: 
// Given an array of strings, return a new array that only 
// includes those that are 6 characters or fewer in length

const sixCharactersOrFewerOnly = (arr) => {
  return arr.filter(x => x.length < 6)
}


/* 
  Add test cases below
*/


console.log("All Tests Passed.")
