const assert = require('assert');

/*
  Expected Behavior: 
  ---------------------------------
  Checks if a student has passed
  - if the mark is 80 or higher then the grade is "A"
  - if the mark is lower than 80 and greater than 60 then the grade is "B"
  - if the mark is 60 or lower but no lower than 50 then the grade is "C"
  - Otherwise the grade is "F"
*/

function calculateGrade(mark) {
  if (mark >= 80){
    return "A"
  }
  else if (mark > 60){
    return "B"
  }
  else if (mark > 50){
    return "C"
  } else {
    return "F"
  }
}

/* 
  Add test cases below
*/
assert.strictEqual(calculateGrade(90), "A", "if the mark is 90, function should return 'A'");
assert.strictEqual(calculateGrade(80), "A", "if the mark is 80, function should return 'A'");
assert.strictEqual(calculateGrade(61), "B", "if the mark is 61, function should return 'B'");
assert.strictEqual(calculateGrade(60), "C", "if the mark is 60, function should return 'C'");
assert.strictEqual(calculateGrade(50), "F", "if the mark is 50, function should return 'F'");

console.log("All Tests Passed.")
