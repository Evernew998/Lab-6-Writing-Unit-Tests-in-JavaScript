const assert = require('assert');

// Expected Behavior: Get the first N element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array.
// Example: first([1, 2, 3], 2) => [1, 2]

const first = (input_array, number_of_elements) => {
  return input_array.slice(0, number_of_elements)
}


/* 
  Add test cases below
*/
assert.deepStrictEqual(first([1, 2, 3], 2), [1, 2], "first([1, 2, 3], 2) should return [1, 2]");
assert.deepStrictEqual(first([1, 2, 3], 10), [1, 2, 3], "first([1, 2, 3], 10) should return [1, 2, 3]");
assert.deepStrictEqual(first([1, 2, 3], 0), [], "first([1, 2, 3], 0) should return []");
assert.deepStrictEqual(first([1, 2, 3], -1), [1, 2], "first([1, 2, 3], -1) should return [1, 2]");
assert.deepStrictEqual(first([1, 2, 3], -2), [1], "first([1, 2, 3], -2) should return [1]");
assert.deepStrictEqual(first([1, 2, 3], -3), [], "first([1, 2, 3], -3) should return []");

console.log("All Tests Passed.")