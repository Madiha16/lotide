const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//TEST CODE
(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)); // => false
(assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false)); // => false
(assertEqual(eqArrays([1, 2, 4], [1, 2, 4]), true)); // => true
(assertEqual(eqArrays([7, 4, 2], [5, 0, 3]), false)); // => false
(assertEqual(eqArrays([1, 2], [1, 2, 3]), false)); // => false
(assertEqual(eqArrays([1, 2, 3], [1, 2]), false)); // => false
