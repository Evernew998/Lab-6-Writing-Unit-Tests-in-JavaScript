const assert = require('assert');

// Expected Behavior: Merge two arrays

const merge_array = (arr1, arr2) => {
  return arr1.concat(arr2)
}


/* 
  Add test cases below
*/
assert.deepStrictEqual(merge_array([1, 2, 3], [4, 5, 6]), [1, 2, 3, 4, 5, 6], "[1, 2, 3] + [4, 5, 6] should return [1, 2, 3, 4, 5, 6]");
assert.deepStrictEqual(merge_array([], [4, 5, 6]), [4, 5, 6], "[] + [4, 5, 6] should return [4, 5, 6]");
assert.deepStrictEqual(merge_array([], []), [], "[] + [] should return []");

console.log("All Tests Passed.")