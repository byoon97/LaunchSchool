const readline = require("readline-sync");

console.log("Wecome to Calculator");

console.log("What is the first number");
let number1 = readline.question();

console.log("What is the second number?");
let number2 = readline.question();

console.log("what is the operator?\n1) Add 2) Subtract 3) Multiply 4) Divide");
let operator = readline.question();

let num1 = Number(number1);
let num2 = Number(number2);
let output;

if (operator === "1") output = num1 + num2;
if (operator === "2") output = num1 - num2;
if (operator === "3") output = num1 * num2;
if (operator === "4") output = num1 / num2;

console.log(`The result is ${output}`);
