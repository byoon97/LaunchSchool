const readline = require("readline-sync");

const prompt = (message) => console.log(message);
const invalidNumber = (num) =>
  num.trimStart() === "" || Number.isNaN(Number(num));

prompt("Wecome to Calculator");

while (true) {
  prompt("What is the first number");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }

  prompt("What is the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number2 = readline.question();
  }

  prompt("what is the operator?\n1) Add 2) Subtract 3) Multiply 4) Divide");
  let operator = readline.question();

  while (!["1", "2", "3", "4"].includes(operator)) {
    prompt("Must choose 1, 2, 3 or 4");
    operator = readline.question();
  }

  let num1 = Number(number1);
  let num2 = Number(number2);
  let output;

  if (operator === "1") output = num1 + num2;
  if (operator === "2") output = num1 - num2;
  if (operator === "3") output = num1 * num2;
  if (operator === "4") output = num1 / num2;

  prompt(`The result is ${output}`);

  prompt("Would you like to perform another operation?\n 1) Yes 2) No)");
  let answer = readline.question();

  if (answer != "yes") break;
}
