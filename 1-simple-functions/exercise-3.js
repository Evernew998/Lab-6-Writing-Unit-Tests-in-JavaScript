const assert = require('assert');

// Expected Behavior: takes a name (a string) and returns a greeting

function createGreeting(inputName) {
    return "Hello, my name is " + inputName
}


/* 
  Add test cases below
*/
assert.strictEqual(createGreeting("Adam"), "Hello, my name is Adam", "When name is Adam, createGreeting should return 'Hello, my name is Adam'");
assert.strictEqual(createGreeting("Charlie"), "Hello, my name is Charlie", "When name is Charlie, createGreeting should return 'Hello, my name is Charlie'");
assert.strictEqual(createGreeting(""), "Hello, my name is ", "When name is '', createGreeting should return 'Hello, my name is '");
assert.strictEqual(createGreeting("123"), "Hello, my name is 123", "When name is not a set of alphabetical characters, createGreeting should return 'Hello, my name is ' + 'non-alphabetical characters'");

console.log("All Tests Passed.")
