//Jake Muilenburg
//N220
//3/30/2023

//get user input 
//on button mulitply input by .15
//put both to console
let p=document.getElementById("price");

function tipCalc(){
    p=price.value;
    tip=p*.15;

    console.log("Tip: $"+tip+". Total: $"+p*1.15);
}