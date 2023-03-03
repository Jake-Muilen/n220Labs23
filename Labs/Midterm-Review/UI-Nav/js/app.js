//Jake Muilenburg
//N220
//3/2/2023

//Make 6 divs
//Make a selected div
//make an If Clicked statement that changes the text to bold and changes the divs background
// display the clicked divs tex in the selected div

let navItem = document.getElementsByClassName("nav");
let selectedOption = document.getElementById("selected");


function selected1(){
    for(let i=0; i <6; i++){
    navItem[i].style.fontWeight = "normal";
    navItem[i].style.backgroundColor = "#ffffff";
navItem[0].style.backgroundColor ="#00ff00";
navItem[0].style.fontWeight = "bold"; 
selectedOption.innerHTML = "Mammal";
    }
}

function selected2(){
    for(let i=0; i <6; i++){
    navItem[i].style.fontWeight = "normal";
    navItem[i].style.backgroundColor = "#ffffff";
navItem[1].style.backgroundColor ="#00ff00";
navItem[1].style.fontWeight = "bold"; 
selectedOption.innerHTML = "Bird";
    }
}

function selected3(){
    for(let i=0; i <6; i++){
    navItem[i].style.fontWeight = "normal";
    navItem[i].style.backgroundColor = "#ffffff";
navItem[2].style.backgroundColor ="#00ff00";
navItem[2].style.fontWeight = "bold"; 
selectedOption.innerHTML = "Fish";
    }
}

function selected4(){
    for(let i=0; i <6; i++){
    navItem[i].style.fontWeight = "normal";
    navItem[i].style.backgroundColor = "#ffffff";
navItem[3].style.backgroundColor ="#00ff00";
navItem[3].style.fontWeight = "bold"; 
selectedOption.innerHTML = "Reptile";
    }
}

function selected5(){
    for(let i=0; i <6; i++){
    navItem[i].style.fontWeight = "normal";
    navItem[i].style.backgroundColor = "#ffffff";
navItem[4].style.backgroundColor ="#00ff00";
navItem[4].style.fontWeight = "bold"; 
selectedOption.innerHTML = "Amphibian";
    }
}

function selected6(){
    for(let i=0; i <6; i++){
    navItem[i].style.fontWeight = "normal";
    navItem[i].style.backgroundColor = "#ffffff";
navItem[5].style.backgroundColor ="#00ff00";
navItem[5].style.fontWeight = "bold"; 
selectedOption.innerHTML = "Insect";
    }
}