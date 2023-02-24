 //Jake Muilenburg
 //n220
 //2-23-2023
 
 //use a getelementbyId to get the array
 //add words to innerhtml instead of just numbers
let times = ["05:37", "08:21", "10:42"];

let second = document.getElementById("second");
let third = document.getElementById("third");

second.innerHTML = times[0];
third.innerHTML = times[1]; 