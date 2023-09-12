const assert = require('assert');

// Expected Behavior: the halve function would return half of the input number (i.e. divide by 2)

function halve(number) {
  return number/2
}


/* 
  Add test cases below
*/
assert.strictEqual(halve(4), 2, "4 divided by 2 should return 2");
assert.strictEqual(halve(-4), -2, "-4 divided by 2 should return -2");
assert.strictEqual(halve(0), 0, "0 divided by 2 should return 0");


console.log("All Tests Passed.")