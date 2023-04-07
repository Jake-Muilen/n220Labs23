//Jake Muilenburg
//N220
//4-6-2023

//use input from page
//creates an array splitting at spaces
//create a loop to look for clear, water, tires
//create an output if any bad word found and the total
//resets user input box

let inputString = document.getElementById("input")
let ans = document.getElementById("ans")

let tally = 0

function search(){
let inputArray = inputString.value.split(" ");
for(i=0; i<inputArray.length; i++){
    if(inputArray[i]=="clear"||inputArray[i]=="water"||inputArray[i]=="tires")
    {
        tally += 1
    }
}
console.log(tally)
if (tally >= 1){
    ans.innerHTML = tally + " Bad Word(s) Found"
}
else ans.innerHTML = "No Bad Words Found"
inputString.value = ""
tally = 0
}