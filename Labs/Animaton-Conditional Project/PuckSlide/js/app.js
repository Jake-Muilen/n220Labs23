//create canvas of 400x300
//draw circle at x and y locations of mouse
//create an if  statement asking if the x y location of mouse is on left or right
//in if statement, set color of circle red or blue
function setup(){
    createCanvas(400,300);
    
}
function draw(){
    background(150);
    noStroke();
    circle(mouseX,mouseY,50);
    if(mouseX>200){
        fill(255,0,0);
    }

    if(mouseX<200){
        fill(0,0,255);
    }
}