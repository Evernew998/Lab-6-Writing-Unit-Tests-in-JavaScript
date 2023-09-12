const assert = require('assert');

// Expected Behavior: multiplies two numbers together

function multiply(x, y) {
  return x * y
}

/* 
  Add test cases below
*/

assert.strictEqual(multiply(2, 2), 4, "2 times 2 should return 4");
assert.strictEqual(multiply(-2, 2), -4, "-2 times 2 should return -4");
assert.strictEqual(multiply(0, 2), 0, "0 times 2 should return 0");
assert.strictEqual(multiply(-2, -2), 4, "-2 times -2 should return 4");


console.log("All Tests Passed.")

