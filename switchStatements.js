// 100 Days Of Coding Challenge!

/* Day-59 Task: Read the following Articles and Code along with it:

Loops: while and for in JavaScript https://javascript.info/while-for

The `switch` statement in JavaScript https://javascript.info/switch */

//---------------------------------------------------------------------

/* The switch Statement in JavaScript
The Syntax
The switch statement evaluates an expression and executes code based on matching case labels.*/

// Syntax:

switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
  // default code block
}

// An Example:

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}

//-------------------------------------------------------------------------------------------------------

/* Grouping of case
Multiple case labels can be grouped to execute the same code block.*/

//Example:

let fruit = "apple";
switch (fruit) {
  case "apple":
  case "banana":
    console.log("This is a fruit.");
    break;
  default:
    console.log("Unknown fruit.");
}

//-------------------------------------------------------------------------------------------------------

/* Type Matters
The switch statement uses strict comparison (===), so the type of the expression and the case values must match.*/

// Example:

let num = "1";
switch (num) {
  case 1:
    console.log("Number 1");
    break;
  case "1":
    console.log("String 1"); // This will be executed
    break;
  default:
    console.log("Not 1");
}
