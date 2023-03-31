//Jake Muilenburg
//N220
//3/30/2023

//make an input, a button, and a div
//make a function that gets the input and removes all ## and outputs in to the div
//onclick of button, activate function

let txt = document.getElementById("inputTxt");

function clean(){
    txt = inputTxt.value;
    cleaned = txt.replaceAll("#","");
    document.getElementById("result").innerHTML=cleaned;
}