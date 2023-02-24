 //Jake Muilenburg
 //n220
 //2-23-2023

//create either a for statement to create the loop
// display numbers individually
let num = 1000;

let count = document.getElementById("count");

function counting(){
    count.innerHTML += num+", ";
    num += 1000;
    console.log(num);
}
for(let n=0; n <5; n++) {
    counting();
}