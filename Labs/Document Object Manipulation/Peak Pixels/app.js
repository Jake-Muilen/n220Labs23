//create green 100x100 square
//Make a variable to store the height and with of the object
//set the height and width, set to varName + "px"
//set up div to onClick() increases hight and width by .1

let square = document.getElementById("square");
let w = 100;
let h = 100;

//sets the paramaters of the div to my variables
square.style.width= w +"px";
square.style.height= h +"px";
document.getElementById("square").onclick = function() {squareGrow()};

//updates the size of the square
function squareGrow() {
   w = w * 1.1;
    square.style.width = w +"px";

    h = h * 1.1;
    square.style.height = h +"px";
}