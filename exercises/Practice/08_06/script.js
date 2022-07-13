/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

// Create a basic function declaration
function changeBackgroundColor(tag_name, color) {
    document.querySelector(tag_name).style.backgroundColor = color
}
changeBackgroundColor('h1', 'black')

// Create a basic function expression
const changeColor = function (tag_name, color) {
    document.querySelector(tag_name).style.color = color
}
changeColor('h2', 'white')

// Create an arrow function
const changeFontSize = (tag_name, size) => {
    document.querySelector(tag_name).style.fontSize = `${size}px`
}
changeFontSize('p', 40)
