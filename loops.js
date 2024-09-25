// 100 Days Of Coding Challenge!

/* Day-59 Task: Read the following Articles and Code along with it:

Loops: while and for in JavaScript https://javascript.info/while-for

The `switch` statement in JavaScript https://javascript.info/switch */

//-------------------------------------------------------------------------------------

/* Loops in JavaScript

The while Loop:
The while loop executes a block of code as long as a specified condition is true.*/

// Syntax:

while (condition) {
  // code block to be executed
}

// Example:

let a = 0;
while (a < 3) {
  console.log(a); // Outputs 0, 1, 2
  i++;
}

//--------------------------------------------------------------------------------------------

/* The do…while Loop:
The do…while loop is similar to the while loop, but it executes the code block once before checking the condition.*/

// Syntax:

do {
  // code block to be executed
} while (condition);

// Example:

let b = 0;
do {
  console.log(b); // Outputs 0, 1, 2
  b++;
} while (b < 3);

//------------------------------------------------------------------------------------------------------------------------

/* The for Loop:
The for loop is the most commonly used loop. It has three parts: initialization, condition, and increment.*/

// Syntax:

for (initialization; condition; increment) {
  // code block to be executed
}

// Example:

for (let i = 0; i < 3; i++) {
  console.log(i); // Outputs 0, 1, 2
}

//------------------------------------------------------------------------------------------------------------------------

/* Breaking the Loop:
You can use the break statement to exit a loop prematurely.*/

// Example:

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Exits the loop when i is 3
  }
  console.log(i); // Outputs 0, 1, 2
}

//---------------------------------------------------------------------------------------------------------------------------

/* Continue to the Next Iteration:
The continue statement skips the current iteration and proceeds to the next one.*/

// Example:

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue; // Skips the iteration when i is 3
  }
  console.log(i); // Outputs 0, 1, 2, 4
}

//----------------------------------------------------------------------------------------------------------------------------

/* Labels for Break/Continue:
Labels can be used with break and continue to control loops more precisely.*/

// Example:

outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // Exits both loops
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}
