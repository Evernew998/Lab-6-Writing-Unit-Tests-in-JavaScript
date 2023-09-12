const assert = require('assert');
// Expected Behavior: 
// Given an array of numbers, return a new array that has only the numbers that are 10 or greater.

const tenAndGreaterOnly = (arr) => {
  return arr.filter(x => x >= 10)
}


/* 
  Add test cases below
*/


console.log("All Tests Passed.")