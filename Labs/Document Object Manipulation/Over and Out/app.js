//create a 100x100 blue square
//create div around square
//use onMouseOver to set square to black
//use onmouseout to set square to blue

let square = document.getElementById("square");
//Sets the original color to blue
square.style.backgroundColor="#0000FF";

//checks to see where mouse is, and selects what function to pick
document.getElementById("square").onmouseover = function() {black()};
document.getElementById("square").onmouseout = function() {blue()};

//sets color to black
function black(){
    square.style.backgroundColor="#000000";
}
//sets color to blue
function blue(){
    square.style.backgroundColor="#0000FF";
}