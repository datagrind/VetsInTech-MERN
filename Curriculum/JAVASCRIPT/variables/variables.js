// Variable declaration with var
var nameVar = "Alice";

// Variable declaration with let
let ageLet = 30;

// Variable declaration with const
const piConst = 3.14159;

// Reassigning values to variables
nameVar = "Bob";
ageLet = 35;
// piConst = 3.14; // This would result in an error because you can't reassign a const variable

// Block-scoped variable with let
if (true) {
  let blockVar = "I'm a block-scoped variable";
  console.log(blockVar); // Accessible within this block
}

// Variables declared with var are function-scoped
function exampleFunction() {
  var functionVar = "I'm a function-scoped variable";
  console.log(functionVar); // Accessible within this function
}

exampleFunction();

// Variables declared outside of a block are accessible within the entire function
function exampleBlockFunction() {
  if (true) {
    var outsideBlockVar = "I'm accessible throughout the function";
  }
  console.log(outsideBlockVar);
}

exampleBlockFunction();

// Variables declared globally are accessible throughout the script
console.log(nameVar);
console.log(ageLet);

// Variables declared globally are also accessible within functions
function greet() {
  console.log("Hello, " + nameVar);
}

greet();
