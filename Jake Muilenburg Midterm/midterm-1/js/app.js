//Jake Muilenburg
//N220
//3/2/2023

//Sets up array
let array = ["Cirro", "cumulo", "nimbo", "strato"];
//Gets the div from the HTML
document.getElementById("loopArray");

for(let i = 0; i < array.length; i++){
    //checks to see if array position is less that 3, if it is, add an and
    if(array[i]< array[3]){
        loopArray.innerHTML += array[i]+" and ";
    //if greater than 3, no and    
    }else{
        loopArray.innerHTML += array[i];
    }
}