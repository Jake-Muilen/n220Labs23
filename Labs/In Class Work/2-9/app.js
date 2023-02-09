function checkResponse(time){
    if(time=='morning'){
        document.getElementById("response").innerHTML = "That is Correct";
    }
    if(time=='afternoon'){
        document.getElementById("response").innerHTML = "Wrong";
    }
    if(time=='evening'){
        document.getElementById("response").innerHTML = "Guess Again";
    }

}