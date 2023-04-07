//Jake Muilenburg
//N220
//3/2/2023

//Make 4 Divs with each move option
//Make a global variable for score started at 0
//create a random move generator for computer that activates when any of the divs are clicked
//create a set of if statements that check to see if computor won or lost
//if player chooses guard subtract 1/2 a point from score
// display the result of the round, ie what player chose and what computer chose
//update score
//0 = rock
//1 = paper
//2 = scissors

let score = 0;

function CPU(){
    cpuRoll=Math.floor(Math.random() * 3);
   if(cpuRoll==0){
        cpuRoll = "Rock";
    } if (cpuRoll==1){
        cpuRoll = "Paper";
    }else{
        cpuRoll = "Scissors";
    }
}

function guard(){
    score=score-.5;
    document.getElementById("score").innerHTML=score;
    document.getElementById('results').innerHTML="You chose Guard! You lose half a point!";
}
function roll(choice){
CPU();

 if(choice=='Rock'){
    if(cpuRoll=="Scissors"){
        score=score+1;
        console.log("win");
    }else if(cpuRoll=="Paper"){
        score=score-1;
        console.log("lose");
    }else{
        console.log("tie");
    }
 }
 if(choice=='Paper'){
    if(cpuRoll=="Rock"){
        score=score+1;
        console.log("win");
    }else if(cpuRoll=="Scissors"){
        score=score-1;
        console.log("lose");
    }else{
        console.log("tie");
    }
 }
 if(choice=="Scissors"){
    if(cpuRoll=="Paper"){
        score=score+1;
        console.log("win");
    }else if(cpuRoll=="Rock"){
        score=score-1;
        console.log("lose");
    }else{
        console.log("tie");
    }
 }
 document.getElementById('results').innerHTML="You chose "+ choice +":  Computer chose "+ cpuRoll+":";
 document.getElementById("score").innerHTML=score;
}