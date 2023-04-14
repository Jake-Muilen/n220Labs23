//Jake Muilenburg
//N220
//4/14/2023

let txt=document.getElementById("text")
let q1=document.getElementById("q1");
let q2=document.getElementById("q2");
let q3=document.getElementById("q3");

q1.addEventListener("click",function(){
    showAnswer("q1")
})

q2.addEventListener("click",function(){
    showAnswer("q2")
})

q3.addEventListener("click",function(){
    showAnswer("q3")
})

function showAnswer(id){
    let button=document.getElementById(id)
    let answer=button.getAttribute("answer");
    txt.innerHTML="The Answer is: "+answer;
}