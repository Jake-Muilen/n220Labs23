//let d=1
//create a canvas of 1400x800
//use a draw function to create a background
//draw a circle with a diameter of 1 that grows by one every frame
//create an if statement that sets circle diamater to 1 if diameter is 200
let d=1;
function setup(){
    createCanvas(1400,800);
    background(150);
}
function draw(){
    background(150);
    noStroke();
    fill(255);
    circle(700,400,d);
    d=d+1;
    if(d>200){
        d=1;
    }
}