import ancientsData from "../data/ancients.js";
import difficulties from "../data/difficulties.js";

console.log(difficulties);
console.log(ancientsData);

var element;
element = document.getElementById("cardID");

const btn = document.getElementById("mybtn");
btn.textContent = "Click here";
btn.addEventListener("click", showalert);

function showalert(){
    element.textContent = "Start the game";
    console.log("show");
}

function whichCard(par){
    console.log(par)
}



function showdiffs(){
    console.log("difs")
}



const cardsPlaceholder = document.getElementById("kartalar");

for(let i = 0; i < ancientsData.length; i++){
    let oneCard = document.createElement("div");
    oneCard.style.border = "1px solid black";
    oneCard.style.position = "relative";
    oneCard.style.height = "100px";
    oneCard.style.width = "80px";
    oneCard.style.margin = "20px 20px";
    oneCard.style.backgroundColor = "orange";
    oneCard.textContent = ancientsData[i].name;
    oneCard.addEventListener("click", (e) => {whichCard(ancientsData[i].name)})

    cardsPlaceholder.appendChild(oneCard);
}
