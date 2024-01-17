// Objective:

// Create a webpage that displays the values of various JavaScript variables. You will learn how to declare variables in JavaScript and use DOM manipulation to display their values in HTML.

// Tasks:

// HTML File (exercise_variables.html):
// Create an HTML page with a title "Variable Display Exercise."
// Add a heading (h1) with the text "JavaScript Variable Display."
// Include a paragraph (<p>) element with an ID "output" where the variables' values will be displayed.
// Add a <script> tag to include your JavaScript file.

// JavaScript File (exercise_variables.js):
// Declare three variables: a string, a number, and a boolean.
var string1 = "Hello";
var num1 = 0;
var bool1 = true;
// Example: var userName = "Alex"; var userAge = 25; var hasSubscription = true;
// Access the HTML element with the ID "output" using document.getElementById.
var outputEle = document.getElementById('output')
// Use innerHTML to display the values of these variables in the "output" paragraph. Format the output to be user-friendly.
outputEle.innerHTML = `
    <p> ${string1} </p>
    <br>
    <p> ${num1} </p>
    <br>
    <p> ${bool1} </p>
`
// Experiment with concatenation and template literals for string output.

//     Test Your Page:
//     Open variabledisplay.html in a browser.
//     Verify that the variables' values are correctly displayed in the paragraph with the ID "output."

//     Experiment:
//     Try modifying the values of the variables.
//     Experiment with different data types (e.g., arrays, objects).

//     Reflect:
//     Consider how changing the variable types affects the output.
//     Think about how this method could be used in real-world applications.

