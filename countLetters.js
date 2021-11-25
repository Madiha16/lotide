const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//SUCCESS!
const countLetters = function (sentence) {
  let results = {}; //initialize empty object
  for (let letter of sentence) { //loop through each character in the string
    if (letter !== " ") {
      if (results[letter]) { //if character was counted before, update count by 1
        results[letter] += 1;
      } else {//increase count for character by 1 if it's a new character
        results[letter] = 1;
      }
    }
  }// return results object with count of each letter after looping through all characters
  return results;
};

const resultsLighthouse = countLetters("lighthouse in the house");

console.log(countLetters("lighthouse in the house")); // { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, ' ': 3, n: 1 }
console.log(countLetters("bye")); // { b: 1, y: 1, e: 1 }
//assertEqual(actual, expected);

(assertEqual(resultsLighthouse["i"], 2));
(assertEqual(resultsLighthouse["w"], undefined));
(assertEqual(resultsLighthouse["h"], 4));


//first attempt
// const countLetters = function(sentence) {
//   let results = {};
//   for (let letter of sentence) {
//     if (results[letter] = 1) {
//       results[letter] += 1;
//     }
//     (results[letter] = 1);
//   }
//   return results;
// }; //console.log(countLetters("yoo")); // { y: 1, o: 1 }

//BUNCHA CONSOLE.LOGS
// const countLetters = function(sentence) {
//   let results = {};
//   for (let letter of sentence) {
//     //console.log(letter); // h/e/l/l/o
//     if (results[letter] = 1) {
//       results[letter] = 1 + 1;
//       //console.log(results[letter]);// 2/2/2/2/2
//     };
//     (results[letter] = 1);
//     console.log(results);// { h: 1 }/ { h: 1, e: 1 }/{ h: 1, e: 1, l: 1 }/{ h: 1, e: 1, l: 1 }
//   }
//   return results;
// };

// Create a function called countLetters.
// The function should take in a sentence(as a string) and then return a
// count of each of the letters in that sentence.
// For example, countLetters('LHL') should return results indicating that L appears twice, and H once.
// Before implementing this function, we need to think about how it will report back these counts.
// It's not that we want to know how many H's are in this sentence ?
// because that would just be a number.We need it report back multiple numbers.