let click = { x: 0, y: 0 };

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //sets chords to where mouse is clicked
  if(mouseIsPressed) {
    click.x = mouseX;
    click.y = mouseY;
  }
  
  let length = distance( click, { x: mouseX, y: mouseY });
  //changes line to red if too long
  if(length > 120){
   stroke(255,0,0);
  } else {
    stroke(0);
  }

  line(click.x, click.y, mouseX, mouseY);
}

function distance(p1, p2) {
  //calculates x distance
  let dx = p1.x - p2.x;
  //calculates y distance
  let dy = p1.y - p2.y;
  
  //return the distance
   return Math.sqrt(dx*dx + dy*dy);
}