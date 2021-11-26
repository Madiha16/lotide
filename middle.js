const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return true;
    } else {
      return false;
    }
  }
};

const assertArraysEqual = function (array1, array2) {
  let pass = true; // declare variable to check if arrays remain equal
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      pass = false; // if an element is not the same change pass to false
      break;
    }
  }
  return (pass === true ? console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) : console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`));
}; //if pass is still true, console log appropriate. Otherwise console log fail message.

//ACTUAL FUNCTION
const middle = function(array) {
  let result = [];
  let i = array.length;
  if (i > 2 && (i % 2 === 0)) {
    result.push(array[(i / 2) - 1]);
    result.push(array[(i / 2)]);
  }
  if (i > 2 && (i % 2 !== 0)) {
    result.push(array[(i - 1) / 2]);
  }
  return result;
};

// TEST CODE
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

let result1 = middle([1, 2, 3]);

console.log(assertArraysEqual(result1, [2]));

console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));

// Implement middle which will take in an array and return the middle-most
// element(s) of the given array.

// The middle function should return an array with only the middle element(s)
// of the provided array. This means that the length of the returned elements could vary.

// For arrays with one or two elements, there is no middle. Return an empty array.
// middle([1]) // => []
// middle([1, 2]) // => []
// For arrays with odd number of elements, an array containing a single middle
// element should be returned.

// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]

// For arrays with an even number of elements, an array containing the two elements in
// the middle should be returned

// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
// Write test assertions for the various scenarios with middle

// We can and should use the assertArraysEqual function for testing our new function.
// That's why we brought it in here to begin with.

// You may wonder if your middle.js file is supposed to be this long.
// Due to the copy/pasted assertion functions, your test code will indeed take up a
// big chunk of the file. The flow of it should look like this: