//Jake Muilenburg
// 02/02/23
// N220


//setup background
//create function polarPoint(r)
//create x variable and set it to r * Math.sin(mouseX);
//create y variable and set it to the result to r * Math.cos(mouseX);
//return with createVector(x,y);
//set a variable res = result of calling polarPoint() in draw()
//add a translate (100,100) and draw a circle at res.x, res.y and give it a 10 radius

function setup(){
    createCanvas(800,600);
    background(50,50,50);
    fill(100);

}
function polarPoint(){

    let x = Math.sin(mouseX);
    let y = Math.cos(mouseX);
    
    return createVector(x,y);
}

function draw(){
    var res=polarPoint();
    fill(255); 
    translate(400,300);
    circle(res.x*100,res.y*100,10);
}