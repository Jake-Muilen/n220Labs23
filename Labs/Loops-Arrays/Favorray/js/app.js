 //Jake Muilenburg
 //n220
 //2-23-2023

 //make an array of 5 favorite things
 //make a variable that allows the code to change the div
 //make a loop that writes an item from the array followed by text and does this for everything in the array.
 let favs = ["Cars", "Burgers", "Videogames", "Friends", "Family"];

let myFavs = document.getElementById("myFavs");

for(let i = 0; i < favs.length; i++){
    myFavs.innerHTML += favs[i]+", are one of my favorite things.<br>";
}