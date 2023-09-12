const assert = require('assert');

/*
  Expected Behavior: 
  ---------------------------------
  - if number is less than zero, return the word "negative"
  - if number is more or equal to zero, return the word "positive"
*/

function negativeOrPositive(number) {
  if (number < 0){
    return "negative"
  } else {
    return "positive"
  }
}

/* 
  Add test cases below
*/

console.log("All Tests Passed.")