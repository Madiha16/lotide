// const eqArrays = function(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] === array2[i]) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

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

// assertArraysEqual([1,2,3], [1,2,3]);
// assertArraysEqual([1,2,3], [1,2,4]);

//My logic
//if sourceArray has any of the itemsToRemove value, make a new array with those values removed.
//if sourceArray values do not equal items to remove values, push them into a new Array.

//third ATTEMPT // using nested for loops, .slice(), .splice(i,1)
const without = function (sourceArray, itemsToRemove) {
  let newArray = sourceArray.slice();
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (newArray[i] === itemsToRemove[j]) {
        newArray.splice(i, 1);
      }
    }
  }
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); //✅✅✅ Assertion Passed: hello,world,lighthouse === hello,world,lighthouse
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // ✅✅✅ Assertion Passed: 2,3 === 2,3
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // ✅✅✅ Assertion Passed: 1,2 === 1,2

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"]));


// // FIRST ATTEMPT
// const without = function(sourceArray, itemsToRemove) {
//   let removeElem = [];
//   let newArray = [];
//   for (let i = 0; i < itemsToRemove.length; i++) {
//     for (let j = 0; j < sourceArray.length; j++) {
//       if (sourceArray[j] !== itemsToRemove[i]) {
//         newArray.push(sourceArray[j]);
//         console.log(sourceArray[j]);
//       }
//     }
//   }
//   return console.log(newArray); //
// };
// [
//   '1', '2', '3',
//   '1', '2', '3',
//   '1', '2'
// ]

// // second ATTEMPT // gives the element needing to be removed
// const without = function(sourceArray, itemsToRemove) {
//   //let notWanted = [];
//   let newArray = [];
//   for (let i = 0; i < itemsToRemove.length; i++) {
//     for (let j = 0; j < sourceArray.length; j++) {
//       if (sourceArray[j] === itemsToRemove[i]) {
//         newArray.push(itemsToRemove[i]);
//         //console.log(itemsToRemove[i]);
//       }
//     }
//   }
//   return console.log(newArray); //
// };

// using tempVar, null
// const without = function(sourceArray, itemsToRemove) {
//   let newArray = [];
//   for (let i = 0; i < sourceArray.length; i++) {
//     let tempVar;
//     for (let j = 0; j < itemsToRemove.length; j++) {
//       if (sourceArray[i] !== itemsToRemove[j]) {
//         tempVar = sourceArray[i];
//       } else {
//         tempVar = null;
//       }
//     }
//     if (tempVar) {
//       newArray.push(tempVar);
//     }
//   }
//   return newArray; //
// };


// using tempVar, true and false
// const without = function(sourceArray, itemsToRemove) {
//   let newArray = [];
//   for (let i = 0; i < sourceArray.length; i++) {
//     let tempVar = false;
//     for (let j = 0; j < itemsToRemove.length; j++) {
//       if (sourceArray[i] !== itemsToRemove[j]) {
//         tempVar = true;
//       } else {
//         tempVar = false;
//       }
//     }
//     if (tempVar) {
//       newArray.push(sourceArray[i]);
//     }
//   }
//   return newArray; //
// };


// Implement without which will return a subset of a given array,
// removing unwanted elements.

// This function should take in a source array and a itemsToRemove
// array. It should return a new array with only those elements
// from source that are not present in the itemsToRemove array.

// Here are a couple examples, but please don't limit your testing
// to just these scenarios:

// without([1, 2, 3], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
// Use assertArraysEqual to write test cases for various scenarios.

// Among your test cases, be sure to include an important test that
// is easy to overlook: The without function should be returning a
// new array and not modify the original array that is passed in.
// Let's write a test case to ensure this:

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);