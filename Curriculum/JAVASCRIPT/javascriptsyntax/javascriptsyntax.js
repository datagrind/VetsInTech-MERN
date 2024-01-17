// Task 1: Working with Statements and Variables
// Create a file named javascriptsyntax.js.
// Write statements to declare variables using var, let, and const. Assign different data types to these variables.
// Use console.log() to output the values of these variables.

//simple variable with a number data type
var num = 1;
console.log(num)
let num2 = 2;
console.log(num2)
const num3 = 3;
console.log(num3)

/* simple variable with string as data type */
var string1 = "Hello";
console.log(string1)
let string2 = "Hello";
console.log(string2)
const string3 = "Hello";
console.log(string3)

// simple variable with true or false as boolean data types
var bool1 = true;
console.log(bool1)
let bool2 = true;
console.log(bool2)
const bool3 = false;
console.log(bool3)

/* simple variables with objects containing key and value pairs */
var obj1 = {key1: "value1"}
console.log(obj1)
let obj2 = {key1: "value1"}
console.log(obj2)
const obj3 = {key1: "value1"}
console.log(obj3)

// simple variable with arrays as data types containing string, numbers, and objects, repectively
var array1 = ["string1", "string2", "string3"]
console.log(array1)
let array2 = [1, 2, 3]
console.log(array2)
const array3 = [{},{},{}]
console.log(array3)

/* simple variable with undefined */
var undefined1 = undefined;
console.log(undefined1)
let undefined2 = undefined;
console.log(undefined2)
const undefined3 = undefined;
console.log(undefined3)

// simple variable with null
var null1 = null;
console.log(null1)
let null2 = null;
console.log(null2)
const null3 = null;
console.log(null3)


// Task 2: Utilizing Comments
// Add both single-line and multi-line comments to your javascriptsyntax.js file, explaining what each block of code does.

// Task 3: Exploring Data Types
// Create variables for different data types (number, string, boolean, array, and object).
// Use console.log() to display the type of each variable using typeof.

var anumber = 1;
console.log(typeof anumber)
let astring = "hello";
console.log(typeof astring)
const aboolean = true;
console.log(typeof aboolean)

// Task 4: Implementing Operators
// Perform basic arithmetic operations and comparisons between variables.
// Output the results using console.log().
var big = 20;
var small = 2;
console.log(big < small)

// Task 5: Creating and Calling Functions
// Write a function that takes a name as a parameter and logs a greeting.
// Call this function with different names.

const greeting = (name) => {
  console.log(`Hello, ${name}!`)
}
greeting("Ben")
// Task 6: Conditional Statements
// Write an if-else block that checks the value of a variable and logs different outputs.
// Test this with different values.

var value1 = 10;
var value2 = 100;
if (value1 < 9) {
  console.log("It is smaller than 9")
} else {
  console.log("It is bigger than 9")
}

// Task 7: Writing Loops
// Write a for loop and a while loop that iterate a certain number of times, logging each iteration.
var numbervalue = 10;
for (let i = 0; i <= numbervalue; i++ ) {
  console.log(`Logging iteration: ${i}`)
}

// Task 8: Working with Objects and Arrays
// Create an object and an array, each with multiple elements.
// Use console.log() to access and display specific elements from the object and array.

var objex = { name: "Ben", age: 34, gender: "male"}
console.log(objex.name)
var arrayex = ["sushi", "pizza", "icecream"]
console.log(arrayex[2])
