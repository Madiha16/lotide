// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return true;
    } else {
      return false;
    }
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => should fail
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // => should fail
assertEqual(eqArrays([1, 2, 4], [1, 2, 4]), true); // => should PASS
assertEqual(eqArrays([7, 4, 2], [5, 0, 3])); // => should fail

// Challenge
// Implement a function eqArrays which takes in two arrays and returns
// true or false, based on a perfect match.

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
// Use assertEqual to write test cases for various scenarios.

// The tests can be written below the definition of your function. Here's
// one example to get you started.

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// Please write out the rest of the assertions.

// It's okay for eqArrays to not return true for nested arrays or arrays of
// objects that are identical. We will save this "deeper" problem for another day.