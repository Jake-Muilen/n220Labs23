//Jake Muilenburg
//N220
//4-6-2023

//takes input from user
//covert list into an array
//convert array of string to num
//loop array values
//use loop to find sum and averages
//output the average and sum into div in HTML
//resets the input in HTML

let inputString = document.getElementById("input")
let SUM = document.getElementById("sum")
let AVG = document.getElementById("avg")
let sum = 0

function calc(){
let inputArray = inputString.value.split(",");
let numberArray = inputArray.map(Number);

for(i=0;i<numberArray.length;i++){
    sum += numberArray[i] 
}

let average = sum / numberArray.length
SUM.innerHTML= "Sum: " + sum;
AVG.innerHTML = "Average: " + average
inputString.value = ""
sum = 0
}