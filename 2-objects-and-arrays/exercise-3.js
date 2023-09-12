const assert = require('assert');
// Expected Behavior: 
// Given an array of numbers, return a new array that has only the numbers that are 10 or greater.

const tenAndGreaterOnly = (arr) => {
  return arr.filter(x => x >= 10)
}


/* 
  Add test cases below
*/
assert.deepStrictEqual(tenAndGreaterOnly([0, 1, 2]), [], "tenAndGreaterOnly([0, 1, 2]) should return []");
assert.deepStrictEqual(tenAndGreaterOnly([0, -1, -2]), [], "tenAndGreaterOnly([0, -1, -2]) should return []");
assert.deepStrictEqual(tenAndGreaterOnly([]), [], "tenAndGreaterOnly([]) should return []");
assert.deepStrictEqual(tenAndGreaterOnly([0, 1, 10]), [10], "tenAndGreaterOnly([0, 1, 10]) should return [10]");
assert.deepStrictEqual(tenAndGreaterOnly([0, 10, 20]), [10, 20], "tenAndGreaterOnly([0, 10, 20]) should return [10, 20]");

console.log("All Tests Passed.")