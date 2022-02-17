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

const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays((arr1), (arr2))) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    return;
  }
  console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  return;
};

const flatten = (arr) => {
  let flatArr = [];
  for (let elem of arr) {
    if (Array.isArray(elem)) {
      for (let nestedElem of elem) {
        flatArr.push(nestedElem);
      }
    } else {
      flatArr.push(elem);
    }
  }
  return flatArr;
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);


//// check if elem is not array first
// const flatten = (arr) => {
//   let flatArr = [];
//   for (let elem of arr) {
//     if (!Array.isArray(elem)) {
//       flatArr.push(elem);
//       console.log(" elm", elem);
//     } else {
//       for (let nestedElem of elem) {
//         console.log("nested elm", nestedElem);
//         flatArr.push(nestedElem);
//       }
//     }
//   }
//   return console.log(flatArr);
// };