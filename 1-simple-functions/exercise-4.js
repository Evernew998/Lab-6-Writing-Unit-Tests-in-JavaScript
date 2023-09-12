const assert = require('assert');

// Expected Behavior: Convert the input to all upper case

function convertToUpperCase(inputName){
    return inputName.toUpperCase()
}


/* 
  Add test cases below
*/
assert.strictEqual(convertToUpperCase("hello"), "HELLO", "hello uppercase should return HELLO");
assert.strictEqual(convertToUpperCase("123"), "123", "123 uppercase should return 123");
assert.strictEqual(convertToUpperCase(""), "", "'' uppercase should return ''");
assert.strictEqual(convertToUpperCase("!?*"), "!?*", "!?* uppercase should return !?*");

console.log("All Tests Passed.")