//Jake Muilenburg
//N220
//4/14/2023
let box1=document.getElementById("box1");
let box2=document.getElementById("box2");
let box3=document.getElementById("box3");

box3.addEventListener("click", function(){
    update(box3,"red")
})
box2.addEventListener("click", function(){
    update(box2,"green")
})
box1.addEventListener("click", function(){
    update(box1,"blue")
})

function update(box,color){
box.style.backgroundColor=color
}