//sets up left rectangle
let recL={
x:10,
y:180,
w:20,
h:40,
}
//sets up right rectangle
let recR={
x:570,
y:180,
w:20,
h:40,
}

//sets up background
function setup(){
    createCanvas(600,400);
}

function draw(){
    background(200);
//if up arrow is pressed, left goes up, right goes down
    if (keyIsDown(UP_ARROW)) {
        recL.y-=2;
        recR.y+=2;
      }
//if down arrow is pressed, left goes down, right goes up
      if (keyIsDown(DOWN_ARROW)) {
        recL.y+=2;
        recR.y-=2;
      }
//draws both rectangles
      rect(recL.x,recL.y,recL.w,recL.h);
      rect(recR.x,recR.y,recR.w,recR.h);
}