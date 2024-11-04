const readline = require("readline-sync");

const prompt = (message) => console.log(message);
const invalidNumber = (num) =>
  num.trimStart() === "" || Number.isNaN(Number(num));

prompt("Calculate your Mortgage");

// Loan amount
prompt("Enter loan amount");
let loan = readline.question();

while (invalidNumber(loan)) {
  prompt("Hmm... that doesn't look like a valid number.");
  loan = readline.question();
}

// APR amount
prompt("Enter APR in %");
let apr = readline.question();

if (!apr.includes("%") || isNaN(parseFloat(apr.replace("%", "")))) {
  prompt("Please Enter your APR in % form (e.g., 5%).");
  apr = readline.question();
}

//converts the apr string into an integer
let monthlyInterestRate = parseFloat(apr.replace("%", "")) / 100;

// Duration Amount
prompt("Enter duration in years");

let duration = readline.question();
while (invalidNumber(duration)) {
  prompt("Hmm... that doesn't look like a valid number.");
  duration = readline.question();
}

let durationMonths = duration * 12;

let monthlyPayment =
  loan *
  (monthlyInterestRate /
    (1 - Math.pow(1 + monthlyInterestRate, -durationMonths)));

console.log(`Your Monthly Payment is $${monthlyPayment.toFixed(2)}`);
