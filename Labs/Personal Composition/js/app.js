let button;
function setup() {
    createCanvas(800,600);
    background(50,50, 50);
    strokeWeight(40);
    noFill();
    circle(210, 300, 200);
    circle(335, 300, 200);
    circle(460, 300, 200);
    circle(585, 300, 200);
    strokeWeight(10);
    noFill();
    stroke(100,100,100);
    circle(210, 300, 200);
    circle(335, 300, 200);
    circle(460, 300, 200);
    circle(585, 300, 200);
}
function keyPressed() {
    if (keyCode === 65) {
        strokeWeight(10);
        noFill();
        stroke(255,255,255);
        circle(210, 300, 200);
        
    } else if (keyCode === 85) {
        strokeWeight(10);
        noFill();
        stroke(255,255,255);
        circle(335, 300, 200);
        
    }
    else if (keyCode === 68) {
        strokeWeight(10);
        noFill();
        stroke(255,255,255);
        circle(460, 300, 200);
        
    }
    else if (keyCode === 73) {
        strokeWeight(10);
        noFill();
        stroke(255,255,255);
        circle(585, 300, 200);
        
    }else if (keyCode === 32) {
    strokeWeight(10);
    noFill();
    stroke(100,100,100);
    circle(210, 300, 200);
    circle(335, 300, 200);
    circle(460, 300, 200);
    circle(585, 300, 200);
        
    }
    else{

    }
  }

  