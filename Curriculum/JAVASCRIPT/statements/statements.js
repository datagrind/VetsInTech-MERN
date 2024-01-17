// Ensure you save your work and upload all of your files.

// Objective:

// This exercise is designed to help you understand and practice using different types of statements in JavaScript. By completing this task, you will gain familiarity with declarations, assignments, conditionals, loops, function invocations, and more.

// Tasks:

//     Declaration Statements:
//     Declare a variable x with the value 10.
var x = 10;
//     Declare a function sayHello that logs "Hello" to the console.
function sayHello() {
  console.log("Hello");
}
//     Assignment Statements:
//     Assign a new value 20 to the variable x.
x = 20;
//     Create an object myObject and assign a new property property with the value "New Value".
var myObject = {};
myObject = {"property": "New Value"}
//     Conditional Statements:
//     Write an if-else statement to check if x is greater than 15. Log "Greater" if true, otherwise log "Smaller or Equal".
if (x > 15) {
  console.log("Greater")
}else {
  console.log("smaller or equal")
}
//     Looping Statements:
//     Write a for loop that iterates from 0 to 4 and logs each number.
for (let i = 0; i < 5; i++){
  console.log(i)
}
//     Write a while loop that logs numbers from 0 to 4.
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
//     Function Invocation Statements:
//     Invoke the sayHello function.
sayHello()
//     Return Statements:
//     Create a function add that takes two parameters, a and b, and returns their sum.
function twoSum(num1, num2) {
  return num1 + num2
}
//     Break and Continue Statements:
//     Inside a loop from 0 to 9, use break to exit the loop when the counter is 5.
for (let i = 0; i < 10; i++){
  if (i ===5) {
    break;
  }
}
//     Inside another loop, use continue to skip the rest of the loop when the counter is 5.
let w = 0;
while (w < 10){
  if (w===5){
    continue
  }
  console.log(w)
}
//     Switch Statements:
//     Write a switch statement for a variable value with cases 'A' and 'B' and a default case.
switch (x) {
  case 'A':
    console.log("This is case A");
    break;
  case 'B':
    console.log("This is case B");
    break;
  default:
    console.log('This is default');
};
//     Throw and Try-Catch Statements:
//     Use try-catch to handle an intentional error (throw new Error("Test Error")).
throw new Error('Argument is not a number')
try {
  twoSum("a", 5)
}catch (e) {
  console.error(e);
}
//     Label Statements:
//     Use label statements in nested for loops to break out of the outer loop when certain conditions are met.
loop1: for(let i = 0; i <10; i++){
  console.log(i)
  loop2: for(let j = 0; j<10; j++){
    console.log(j)
    if (j===8){
      continue loop1;
    }
  }
}