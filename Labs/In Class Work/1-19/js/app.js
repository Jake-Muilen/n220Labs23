let r=5;
let red=0;
let green=0;
let blue=0;
function setup() {
    createCanvas(800,600);
    background(red,green,blue);
    
   
}

//make it so circle can't grow over radius of 50
function draw(){
    noStroke();
    fill(red,green,blue)
    circle(mouseX, mouseY,r)

    if(mouseIsPressed){
        r++;
        
        red++;
        if(red==255){
            red=0;
        }
        else{

        }
        green++;
        if(green==255){
            green=0;
        }
        else{

        }
        blue++;
        if(blue==255){
            blue=0;
        }
        else{

        }
    }
    else{

    }

    if(r>=50){
        r=50
    }
    else{

    }
}