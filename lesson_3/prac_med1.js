// Question 1

// For this practice problem, write a program that outputs The Flintstones Rock!
// 10 times, with each line indented 1 space to the right of the line above it.
// The output should start out like this:

// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!
//    The Flintstones Rock!
//     ...

let str = "The Flintstones Rock!";
let i = 0;

while (i <= 9) {
  //   console.log(str);
  str = " " + str;
  i++;
}

// Question 2

// Starting with the string:
let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

let strArr = munstersDescription.split("");
let emptyStr = "";

strArr.forEach((char) => {
  if (char.toUpperCase() === char) emptyStr += char.toLowerCase();
  else if (char === " ") emptyStr += char;
  else if (char.toLowerCase() === char) emptyStr += char.toUpperCase();
});

// console.log(emptyStr);

// Question 3

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

// Alyssa noticed that this code would fail when the input is 0 or a negative number,
// and asked Alan to change the loop. How can he make this work without using a do/while loop?
// Note that we're not looking to find the factors for 0 or negative numbers,
// but we want to handle it gracefully instead of raising an exception or going into an infinite loop.

function factors(number) {
  let factors = [];

  for (let divisor = number; divisor >= 1; divisor--) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
  }

  return factors;
}

// Question 4
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement); // mutates the original array passed in as a paramter
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement); // creates a new instance of array rather that mutating the original
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// Question 5
// What will the following two lines of code output?

console.log(0.3 + 0.6); // 0.8999999999999999
console.log(0.3 + 0.6 === 0.9); // false

// Question 6
// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN); // idk but use isNaN(nanArray[0]) instead

// The output is false. NaN -- not a number -- is a special numeric value that indicates that an operation that was intended to return a number failed.
// JavaScript doesn't let you use == and === to determine whether a value is NaN.

// Question 7
// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8); // 34 as answer is initialized with a primitive value of 42
