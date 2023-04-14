//Jake Muilenburg
//N220
//4/14/2023

let r=0;
let g=0;
let b=0;
let ci=document.getElementById("colorimage");
let cc=document.getElementById("colorcode");

function red(val){
    r+=val;
    ci.style.backgroundColor="rgb("+r+","+g+","+b+")"
    update()
}

function green(val){
    g+=val;
    ci.style.backgroundColor="rgb("+r+","+g+","+b+")"
    update()
}

function blue(val){
    b+=val;
    ci.style.backgroundColor="rgb("+r+","+g+","+b+")"
    update()
}

function update(){
    cc.innerHTML="Current Color: rgb("+r+","+g+","+b+")"
}