//Jake Muilenburg
//N220
//3/30/2023

//create 2 inputs and one button
//function access both user inputs and tests them
//if correct say successful, if incorrect, say try again

let un=document.getElementById("username");
let ps=document.getElementById("password");

function verify(){
    let un=username.value;
    let ps=password.value;
    if((un=="Username")&&(ps=="Password")){
        document.getElementById("result").innerHTML="Succsess";
    }else {
        document.getElementById("result").innerHTML="Wrong Information";
    }

}
