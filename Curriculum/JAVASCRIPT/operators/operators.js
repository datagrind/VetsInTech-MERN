// Objective:

// Understand and apply different types of operators in JavaScript by completing a set of tasks that involve arithmetic, assignment, comparison, logical, and other operators.

// Tasks:

//     Arithmetic Operators:
//     Perform basic arithmetic operations (addition, subtraction, multiplication, division, modulus) on two numbers and log the results to the console.
console.log(5+4)
console.log(5-1)
console.log(8*0)
console.log(8/2)
console.log(4%2)

//     Assignment Operators:
//     Initialize a variable and then use different assignment operators to update its value. Display each new value.
var num0 = 30;
num0 = 22;
num0 = null;

//     Comparison Operators:
//     Compare two values using each comparison operator and log whether each statement is true or false.
console.log(8 < 0)
console.log(8>0)
console.log(3>=3)
console.log(4<=2)
console.log(3===2)
//     Logical Operators:
//     Create a few Boolean expressions using logical operators and evaluate their results.
if ( 0 === 0 && 2 ===2){
    console.log(true)
}
if ( 0 === 0 || 2 ===1){
    console.log(true)
}
if ( 0 === 0 && !2){
    console.log(true)
}
//     Increment/Decrement Operators:
//     Use the increment and decrement operators on a number and log the pre and post-increment/decrement values.
var num1 = 30;
console.log(num1)
num1 +=1;
console.log(num1)
num1 -= 3;
console.log(num1)
num1 *=2;
console.log(num1)
num1 /= 2;
console.log(num1)
//     String Concatenation:
//     Concatenate two strings using the + operator and log the result.
console.log("hello there!" + "How are you?")
//     Ternary Operator:
//     Use the ternary operator to create a simple conditional expression and log the output.
num1 ? console.log(true) : console.log(false)
//     Typeof Operator:
//     Use the typeof operator on different data types and log the results.
console.log(typeof 1)
console.log(typeof "string")
console.log(typeof true)
console.log(typeof {"asccc": 1})
console.log(typeof ["a","b", "c"])
//     Bitwise Operators:
//     Experiment with at least two bitwise operators and log the outcomes.
console.log(~3)
console.log(3&4)
//     Elvis Operator (Optional - Advanced):
//     Use the Elvis operator for conditional assignment and log the result.
const obj = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      state: "NY",
      zip: 10001
    }
  };
  
  const zipCode = obj.address?.zip;
  console.log(zipCode);
//     Use the spread o//     Spread Operator (Optional - Advanced):
// perator to combine two arrays or objects and log the result.
var array1 = [1,2,3,4,5]
var newArray = [...array1, 6,7,8,9]
//     Object Destructuring (Optional - Advanced):
//     Destructure an object into variables and log them.
var {name, age, location} = {
    "name": "Ben",
    "age": 34,
    "location": "US",
}
console.log("age", age)

