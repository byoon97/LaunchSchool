// Question 1
// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return;
  {
    prop1: "hi there";
  }
}

// console.log(first()); // "hi there"
// console.log(second()); // undefined as the object is not being returned

// Question 2
// What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

// console.log(numArray); //  => "[1, 2]"
// console.log(object); // { first: [1, 2] } numArray is a reference to the original array and therefor mutable

// Question 3
// Given the following similar sets of code, what will each code snippet print?

{
  function messWithVars(one, two, three) {
    one = two;
    two = three;
    three = one;
  }

  let one = ["one"];
  let two = ["two"];
  let three = ["three"];

  messWithVars(one, two, three);

  //   console.log(`one is: ${one}`); // [one]
  //   console.log(`two is: ${two}`); // [two]
  //   console.log(`three is: ${three}`); //[three]
} // the local parameters of 1, 2, 3 shadow the global variable counterparts. When the local paramters are reassigned,
// they have no effect on the global variables because they are only reassigned locally to the function

{
  function messWithVars(one, two, three) {
    one = ["two"];
    two = ["three"];
    three = ["one"];
  }

  let one = ["one"];
  let two = ["two"];
  let three = ["three"];

  messWithVars(one, two, three);

  //   console.log(`one is: ${one}`);
  //   console.log(`two is: ${two}`);
  //   console.log(`three is: ${three}`);
} // same answer as the first block but the local variables in the functions are being assigned as new arrays

{
  function messWithVars(one, two, three) {
    one.splice(0, 1, "two");
    two.splice(0, 1, "three");
    three.splice(0, 1, "one");
  }

  let one = ["one"];
  let two = ["two"];
  let three = ["three"];

  messWithVars(one, two, three);

  //   console.log(`one is: ${one}`);
  //   console.log(`two is: ${two}`);
  //   console.log(`three is: ${three}`);
} // because the arrays are passed by reference and Array.splice() is a destructive operation, the original copies of
// one two three and then mutated

// Question 4
// Can you identify all of the variables, primitive values, and objects in the following code?

function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!";
  //   console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]);

// 5 variables : func boo, parameter scare, myBoo, halloweenCollection, myBoo
// 2 object : halloweenCollection, object literal reference
// 13 prims : 3 key and 3 values, "!!!", "HAPPY HALLOWEEN!!!" concatenation, myBoo console log, undefined return from myBoo

// Question 5
// return false condition as well as edge cases

const isAnIpNumber = (num) => num >= 0 && num <= 255;

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) return false; // create a break clause

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false; // return false instead of break
    }
  }

  return true; // return true if all conditions are met
}

console.log(isDotSeparatedIpAddress("10.4.11.255"));
