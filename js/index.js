import ancientsData from "../data/ancients.js";
import difficulties from "../data/difficulties.js";

console.log(difficulties);
console.log(ancientsData);

const btn = document.getElementById("mybtn");
btn.textContent = "Замешать колоду";
btn.addEventListener("click", startGame);

function startGame(){
    console.log("Start the Game");
}

function whichCard(par, id){
    //console.log(par)
    //console.log(id)

    let allCards = document.querySelector(".kartalar").children;
    for(let i = 0; i < allCards.length; i++){
        allCards[i].style.backgroundColor = "orange";
    }

    let selectedCard = document.getElementById(id);
    selectedCard.style.backgroundColor = "green";
}

function whichLevel(lvl, id){
    //console.log(lvl)
    //console.log(id)

    let allCards = document.querySelector(".darajalar").children;
    for(let i = 0; i < allCards.length; i++){
        allCards[i].style.backgroundColor = "lightblue";
    }

    let selectedLevel = document.getElementById(id);
    selectedLevel.style.backgroundColor = "green";
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
    oneCard.id = "onecard"+i;
    oneCard.addEventListener("click", (e) => {whichCard(ancientsData[i].name, oneCard.id)})

    cardsPlaceholder.appendChild(oneCard);
}

const levelsPlaceholder = document.getElementById("darajalar");

for(let i = 0; i < difficulties.length; i++){
    let oneLevel = document.createElement("div");
    oneLevel.style.border = "1px solid black";
    oneLevel.style.position = "relative";
    oneLevel.style.height = "40px";
    oneLevel.style.width = "90px";
    oneLevel.style.margin = "10px 10px";
    oneLevel.style.padding = "5px";
    oneLevel.style.backgroundColor = "lightblue";
    oneLevel.textContent = difficulties[i].name;
    oneLevel.id = "onelevel"+i;
    oneLevel.addEventListener("click", (e) => {whichLevel(difficulties[i].name, oneLevel.id)})

    levelsPlaceholder.appendChild(oneLevel);
}