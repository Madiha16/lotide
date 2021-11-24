// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const eqArrays = function(array1, array2) {
  let pass = true; // declare variable to check if arrays remain equal
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      pass = false; // if an element is not the same change pass to false
      break;
    }
  }
  return (pass === true ? console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) : console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`));
}; //if pass is still true, console log appropriate. Otherwise console log fail message.

eqArrays([1,2,3], [1,2,3]);
eqArrays([1,2,3], [1,2,4]);