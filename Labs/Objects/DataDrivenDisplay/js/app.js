//set up object
let target = {
x:300,
y:200,
r:300,
}
//sets up canvas
function setup (){
    createCanvas(600,400);

}
//draws the object 3 times
function draw(){
    background(200);
    noStroke();
    fill(255,0,0);
    circle(target.x,target.y,target.r);
    fill(255);
    circle(target.x,target.y,target.r-100);
    fill(255,0,0);
    circle(target.x,target.y,target.r-200);
}