// put a div on the page
//on click add mc to div
let mc = document.getElementById("mc");
//if clicked, starts function mcAdd
document.getElementById("mc").onclick = function() {mcAdd()};
//adds mc
function mcAdd(){
   mc.innerHTML = mc.innerHTML+"mc";
}