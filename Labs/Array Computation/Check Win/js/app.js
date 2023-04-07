//Jake Muilenburg
//N220
//4-6-2023

//inputs in a comma seperated list in HTML
//separates the input at the commas to create an array
//create a loop that checks every element
//if 3 1 are in a row, display "winner" to html, if not, display, "not winner" to HTML


let inputString = document.getElementById("input")
let result = document.getElementById("result")

function calc(){
let inputArray = inputString.value.split(",");
let numberArray = inputArray.map(Number);
let count = 0

for(let i=0;i < numberArray.length; i++){

    count = 0
    for(let j=0;j <= 2; j++) {
        if(numberArray[i+j] == 1) count++
        else break
    }
     console.log(count)
    if (count == 3) {
        result.innerHTML = "Winner"
        break
    }
    else result.innerHTML = "Not Winner"
}
inputString.value = ""
}