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
assert.deepStrictEqual(sixCharactersOrFewerOnly(["1","02","003"]), ["1","02","003"], "sixCharactersOrFewerOnly(['1','02','003']) should return ['1','02','003']");
assert.deepStrictEqual(sixCharactersOrFewerOnly(["0004","00005"]), ["0004","00005"], "sixCharactersOrFewerOnly(['0004','00005']) should return ['0004','00005']");
assert.deepStrictEqual(sixCharactersOrFewerOnly(['']), [''], "sixCharactersOrFewerOnly(['']) should return ['']");
assert.deepStrictEqual(sixCharactersOrFewerOnly(["000006", "0000007", "00000008"]), [], "sixCharactersOrFewerOnly(['000006', '0000007', '00000008']) should return []");

console.log("All Tests Passed.")
