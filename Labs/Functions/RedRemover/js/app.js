//Jake Muilenburg
// 02/02/23
// N220
//setup background
//set up function that removes red
//fill color as noRed
//draw circle

function setup(){
    createCanvas(800,600);
    background(50,50,50);
    fill(100);
}

function draw(){
    let noRed=removeRed(color(170, 200, 150));
    noStroke();
    fill(noRed);
    console.log(noRed);
    circle(400,300,300);
}

function removeRed(newColor){
    return color(0,green(newColor),blue(newColor));
 }
 