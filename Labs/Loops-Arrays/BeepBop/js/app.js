 //Jake Muilenburg
 //n220
 //2-23-2023

//create both a loop and array
//create variable to use console.log to show the array working with the loop
let beepbop = document.getElementById("beepbop");

for(let i=1; i<26; i++){
if(i%3==0){
     if(i%5==0){ 
            beepbop.innerHTML += "beepbop, "; 
            console.log(i);
     } else {
            beepbop.innerHTML += "beep, ";
            console.log(i);
      }
   } else if(i%5==0){ 
        beepbop.innerHTML += "bop, "; 
        console.log(i);
  } else {
        beepbop.innerHTML += i+", "; 
    }
}