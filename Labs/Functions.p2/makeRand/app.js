//Jake Muilenburg
//N220
//3/30/2023

//make a button and a div
//create a function that generates a random number between 1-10
//onclick activate function
//update the div with the new number

function randomGen(){
    randomNumber= (Math.floor(Math.random()*11));
    resultSender();
}
function resultSender(){
    document.getElementById("result").innerHTML=randomNumber;
}
