//Jake Muilenburg
//N220
//3/2/2023

//creates buttonCount variable
let buttonCount=0;

function buttonClicked(){
    buttonCount=buttonCount+1;
    //asks if button count is greater than or equal to 5.
    if(buttonCount>= 5){
    //changes button HTML to Revealed
        document.getElementById('mysteryButton').innerHTML="Revealed";
    }
}