//draw 800x600 px canvas
//create draw fuction and set background to white
//draw a ball at the left side of canvas
//in the draw function, use x=x+5 to make circle go to the right
// make an if statement if (x>800) to set the x value to 0
let x=0;
function setup(){
    createCanvas(800,600);
    background(200,200,200);
}
function draw(){
    background(200,200,200);
    noStroke();
    fill(0,191,255);
    circle(x,300,100);
    x=x+5;
    if(x>800){
        x=0;
    }
}


