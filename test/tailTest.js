const assertEqual = require('../assertEqual');
const tail = require('../tail');

//TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 1: Check the returned array elements
const result1 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result1.length, 2); // ensure we get back two elements
assertEqual(result1[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result1[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check an array with only one element (should yield an empty array for its tail)
const result2 = tail([]);
assertEqual(result2.length, 0); // ensure we get back 0 elements
assertEqual(result2[0], undefined); // ensure first element is undefined

// Test Case 1: Check the returned array elements for an empty array (should yield an empty array for its tail)
const result3 = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result3.length, 2); // ensure we get back 0 elements
//assertEqual(result3[0], "Lighthouse"); // ensure first element is undefined