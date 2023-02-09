//sets up ball
let ball = {
x:10, 
y:300,
r:100,

//sets up canvas
}
function setup(){
    createCanvas(800,600);
    background(200,200,200);
}
//draws ball
function draw(){
    background(200,200,200);
    noStroke();
    fill(0,191,255);
    circle(ball.x,ball.y,ball.r);
    ball.x=ball.x+5;
//if ball reaches edge of screen, it moves ball back to start
    if(ball.x>800){
        ball.x=0;
    }
}