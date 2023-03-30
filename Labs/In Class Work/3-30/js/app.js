
let letter;

function vowelCheck(letter){
    letter = document.getElementById("letterInput");
   // letter = letter.toLocalLowerCase();
console.log(letter);
    if(letter == "a"||letter == "e"||letter == "i"||letter == "o"||letter == "u"){
    return true;
    console.log("Is vowel");
    }
    return false;
    console.log("Is not vowel");
}