// Objective:

// This exercise aims to practice various DOM manipulation methods in JavaScript, including selecting elements, creating and placing new nodes, moving and removing elements, manipulating styles, and working with attributes.

// Tasks:
// Create an external JavaScript file and link it to the exercise HTML file.
//     Select and Modify an Element:
//         Select the header element using querySelector and change its text content to "Welcome to the DOM Manipulation Exercise".

var header = document.getElementById('header')
header.innerHTML = "Welcome to the DOM Manipulation Exercise"

//     Create and Append a New Node:
//         Create a new paragraph element with the text "This is a dynamically added paragraph." and append it to the newElementContainer.
var newP =  document.createElement("p")
newP.textContent = "This is a dynamically added paragraph."
var appendEle = document.getElementById('newElementContainer')
appendEle.appendChild(newP)

//     Move an Element:
//         Select the first item in itemList and move it to the end of the list.
var move_item = document.getElementById("itemList")
var removed_child = move_item.children[0]
move_item.removeChild(move_item.children[0])
move_item.appendChild(removed_child)
//     Remove an Element:
//         Remove the second item in itemList.
var move_item2 = document.getElementById("itemList")
move_item.removeChild(move_item.children[1])
//     Style Manipulation:
//         Add an event listener to styleButton so that when clicked, it changes the background color of itemList to lightblue and the text color of all list items to white.
var listen_style_button = document.getElementById("styleButton")
var listen_style_button_item = document.getElementById("itemList")
const toggle_style_button = () => {
    listen_style_button.style.backgroundColor = "lightblue"
    listen_style_button_item.style.color = "white"
}
//     Use setAttribute():
//         Create a new input element, set its type attribute to 'text', and append it to content.
var content_new_ele = document.getElementById("content")
var new_elemen = document.createElement("input")
new_elemen.setAttribute("text", "")
content_new_ele.appendChild(new_elemen)

//     Template String for Element Creation:
//         Using a template string, create a new div with the id info and text "This div was created using a template string!" and append it to content.
var content_ele = document.getElementById("content")
content_ele.innerHTML += `<div>This div was created using a template string!</div>`