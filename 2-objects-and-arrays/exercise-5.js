const assert = require('assert');

// Expected Behavior: Count Letters for each of the name in the array of object

const countLetters = (arr) => {
  return arr.map(x => x.name.length)
}

/* 
  Add test cases below
*/
const object1 = {name: "Adam"};
const object2 = {name: "Charlie"};
const object3 = {name: ""};

let arr1 = [object1];
let arr2 = [object2];
let arr3 = [object3];
let arr4 = [object1, object2, object3];

assert.deepStrictEqual(countLetters(arr1), [4], "countLetters([{name: 'Adam'}]) should return [4]");
assert.deepStrictEqual(countLetters(arr2), [7], "countLetters([{name: 'Charlie'}]) should return [7]");
assert.deepStrictEqual(countLetters(arr3), [0], "countLetters([{name: ''}]) should return [0]");
assert.deepStrictEqual(countLetters(arr4), [4, 7, 0], "countLetters([{name: 'Adam'}, {name: 'Charlie'}, {name: ''}]) should return [4, 7, 0");


console.log("All Tests Passed.")
