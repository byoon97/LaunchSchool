// Easy 3

// Write three different ways to remove all of the elements from the following array:
let numbers = [1, 2, 3, 4];

numbers.length = 0;
numbers.filter((ele) => typeof ele !== "number");
Array.splice(0, Array.length);

// Question 2
// What will the following code output?

console.log([1, 2, 3] + [4, 5]); // 1,2,34,5

// in JS, + operator first converts array into strings and then concats

// Question 3
// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1); // "hello there"

// Question 4
// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1); // [{ first: 42 }, { second: "value2" }, 3, 4, 5];

// Question 5
// The following function unnecessarily uses two return statements to return boolean values.
// Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// solution 1
const isColorValid = (color) => color === "blue" || color === "green";

// solution 2
function isColorValid(color) {
  return color === "blue" || color === "green";
}

// Question 6
// Examine the following code carefully.
// Can you identify all of the variables, primitive values, and objects that exist when this code executes?

let arr = [1, 2, 3];
let newArr = arr; // [1, 2, 3] shallow copy of arr

const num = arr[0]; // primitive value 1
let newNum = num; // new instance of 1s

function double(num) {
  return num * 2; // returns 2
}

double(newNum); // returns 2 the value is not initialized anywhere
