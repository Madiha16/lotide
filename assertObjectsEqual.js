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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(obj1, obj2) {
  if ((Object.keys(obj1).length) !== (Object.keys(obj2).length)) {// if key length not equal, return false
    return false;
  }
  for (let key of Object.keys(obj1)) {
    //console.log(obj1[key], obj2[key]);
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {//if obj1 and ob2 key values not same, return false
      return false;
    }
  }
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

//console.log(eqObjects(cd, dc), "true! Objects cd,dc have the same key values");
//console.log(eqObjects(cd, cd2), "false! Objects cd,cd2 don't have the same key values");
//console.log(eqObjects(dc, cd2), "false! Objects dc,cd2 don't have the same key values");

// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message
// to the console.

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  //console.log(`Example label: ${inspect(actual)}`);
  if (!eqObjects(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};


assertObjectsEqual(cd, dc); // same
assertObjectsEqual(cd, cd2); // not the same
assertObjectsEqual(dc, cd2); // not the same






////eqObjects <-true (cd and dc have same key values)
//console.log(eqObjects(cd, dc), "true! Objects cd,dc have the same key values");// => true

//ASSERT EQUAL SHOULD FAIL, can't compare arrays, assertEqual returns undefined since it doesn't have a return value
//console.log(assertEqual(eqObjects(cd, dc), true), "assertEqual can't be true for Objects cd,dc, even though key values are same, since they are arrays"); //

////eqArrays accepts arr1, arr2
//console.log(eqArrays(["2", 3], ["2", 3]), "<-true (eqArrays) Objects cd,dc have the same key values");



////eqObjects <-false (since cd2's key d is different from cd's key d)
//console.log(eqObjects(cd, cd2), "false! Objects cd,cd2 don't have the same key values");// => false

//ASSERT EQUAL SHOULD FAIL but passed, can't compare arrays, assertEqual returns undefined since it doesn't have a return value
//console.log(assertEqual(eqObjects(cd, cd2), false), "passed eqObjects into assertEqual, should return false, compared to false"); //

////eqArrays accepts arr1, arr2
//console.log(eqArrays(["2", 3], ["2", 3, 4]), "<-false (eqArrays) Objects cd,cd2 have different values for key d");