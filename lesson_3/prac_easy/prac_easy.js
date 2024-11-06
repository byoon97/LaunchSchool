// JavaScript built in methods

// String Methods

string.endsWith("!");
// string references to the variable we were calling endsWith() on
// and ("!") being the argument we are searching for

string.charAt(0);
// returns the character of the string in the specified index

string.subString(1);
// returns the substring starting from the designated index

string.slice(startIdx, endIdx);
let advice =
  "Few things in life are as important as house training your pet dinosaur.";
advice.slice(0, advice.indexOf("house"));
// returns a new string from an existing one from the specified indexes

string.replace("str1", "str2");
// returns a new string which all occurances of the first paramter with the second paramter

//------------------------------------------------------------------------------------------------

// Object Methods
Object.prototype.hasOwnProperty();
// this method of object instances returns a boolean whether the object has the specified
// property (key paramter) as its own property

Object.prototype.entires(obj);
// returns an array of the objects own [key, value] pairs. Commonly used to loop through object properties or
// convert the obj into array format

Object.prototype.assign(target, ...sources);
// Object methods which allows you to merge multiple objects into one, or to clone object
// target will receive the properties from the source objects
// sources - one or more source objects whose properties will be copied into target object
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const result = Object.assign(target, source);
console.log(result); // Output: { a: 1, b: 4, c: 5 }

//------------------------------------------------------------------------------------------------

// Array methods

Array.push(ele1, ele2);
// you can push multiple objects into an array which i never knew

Array.slice();
Array.slice(start, end);
// creates a shallow copy of the original array with a start and end index being optional

Array.unshift();
const letters = ["c", "d"];
letters.unshift("a", "b");
console.log(letters); // Output: ['a', 'b', 'c', 'd']
// array method to add one or more element to beginning of an Array from left to right

Array.splice(startingIndex, eleAmount);
// array method which removes elements from an array from the starting index.

Array.flat();
// array method used to flatten nested arrays by a specified depth level. It returns a new array

//------------------------------------------------------------------------------------------------
