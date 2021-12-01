const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word[1]);
console.log(results2);

const results3 = map(numbers, number => number + 1);
console.log(results3);

const assertArraysEqual = function(array1, array2) {
  let pass = true; // declare variable to check if arrays remain equal
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      pass = false; // if an element is not the same change pass to false
      break;
    }
  }
  return (pass === true ? console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) : console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`));
}; //if pass is still true, console log appropriate. Otherwise console log fail message.

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [ 'r', 'o', 'o', 'a', 'o' ]);
assertArraysEqual(results3, [ 2, 3, 4, 5, 6 ]);

// // eqArrays function
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

console.log(eqArrays(results1, ["g", "c", "t", "m", "t"]));
console.log(eqArrays(results2, [ 'r', 'o', 'o', 'a', 'o' ]));
console.log(eqArrays(results3, [ 2, 3, 4, 5, 6 ]));