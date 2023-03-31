//Jake Muilenburg
//N220
//3/30/2023

//make an input and button and div
//make a function tell user if number inputed is divisible by 7
//update the div telling user if divisible
let n=document.getElementById("number");

function divs(){
n=number.value;
if(n%7==0){
    document.getElementById("result").innerHTML=n+" is Divisible by 7";
}else{
    document.getElementById("result").innerHTML=n+" isn't Divisible by 7";
}
}