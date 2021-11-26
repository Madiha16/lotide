const letterPositions = function(sentence) {
  let result = {};
  const sentenceArray = sentence.split('');
  for (let i = 0; i < sentenceArray.length; i++) {
    const element = sentenceArray[i];
    if (element !== ' ') {
      if (result[element] === undefined) {
        result[element] = [i];
      } else {
        result[element].push(i);
      }
    }
  }
  return result;
};

console.log(letterPositions("lighthouse in the house"));

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return true;
    } else {
      return false;
    }
  }
};

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

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("hello").o, [4]);