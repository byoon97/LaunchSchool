// Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants a particular string contains.
// If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other.
// Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.

// Note that for this problem, the letters 'y' and 'w' should be treated as consonants.

// Return a sorted array where the order should be determined by how many consonant letters are adjacement to each other in each string element.
// rules
// - spaces do not count
// - if two strings contain the same amount then sort the two in their original order
// - Value is determined by the highest amount of consonant letters per string
// - single consonants count as 0

// let list1 = ["aa", "baa", "ccaa", "dddaa"];
// console.log(sortStringsByConsonants(list1));
// // ['dddaa', 'ccaa', 'aa', 'baa']

// let list2 = ["can can", "toucan", "batman", "salt pan"];
// console.log(sortStringsByConsonants(list2));
// // ['salt pan', 'can can', 'batman', 'toucan']

// let list3 = ["bar", "car", "far", "jar"];
// console.log(sortStringsByConsonants(list3));
// // ['bar', 'car', 'far', 'jar']

// let list4 = ["day", "week", "month", "year"];
// console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']

// Data Structure
// We will be using array methods. Obviously...
// Maybe a hash map?
let hash = {
  aa: 0,
  baa: 0,
  ccaa: 2,
  dddaa: 3,
};

// algorithm
// DECLARE hash map
// DECLARE empty array
// create a function to determine highest amount of adjacent consonant for strings
// loop through the array of strings
// apply helper funciton to each string
// update each key in map
// maybe store index just in case
// DECLARE new array from hash map
// Sort the array as required

function sortStringsByConsonants(array) {
  let hashMap = array.reduce((ac, a) => ({ ...ac, [a]: 0 }), {});

  function determineNumberOfAdjConsonants(string) {
    let vowels = "aeiou";
    let counter = 0;
  }
}

let list1 = ["aa", "baa", "ccaa", "dddaa"];
console.log(sortStringsByConsonants(list1));
// // ['dddaa', 'ccaa', 'aa', 'baa']

console.log([] + ["a"]);
