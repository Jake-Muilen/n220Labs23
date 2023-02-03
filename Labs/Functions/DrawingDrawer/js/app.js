//Jake Muilenburg
// 02/02/23
// N220
//setup background
//using a drawCar() function, draw a simple car that has 2 circles and a rectangle
// use x and y inputs to control realative position of components
// call drawCar(x,y) a couple of times on the screen
function setup(){
    createCanvas(800,600);
    background(50,50,50);
    fill(100);
}
function drawCar(x,y){
    noStroke();
    fill(201, 28, 22);
    rect(x,y,100,30);
    rect(x+25,y-20,50,20);
    fill(15, 15, 15);
    circle(x+20,y+30,30);
    circle(x+80,y+30,30);
}
function draw(){
    drawCar(323,52);
    drawCar(585,87);
    drawCar(191,281);
    drawCar(450,391);
    drawCar(50,397);
    drawCar(602,430);
}