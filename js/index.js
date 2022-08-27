import ancientsData from "../data/ancients.js";
import difficulties from "../data/difficulties.js";

import bluecardsData from "../data/mythicCards/blue/index.js";
import browncardsData from "../data/mythicCards/brown/index.js";
import greencardsData from "../data/mythicCards/green/index.js";

console.log(difficulties);
console.log(ancientsData);

let current1stage;
let current2stage;
let current3stage;

let neededGreens = 0;
let neededBlues = 0;
let neededBrowns = 0;

const btn = document.getElementById("mybtn");
btn.textContent = "Замешать колоду";
btn.addEventListener("click", startGame);

function startGame(){
    let firststage = document.getElementById("firststage").children;
    let secondstage = document.getElementById("secondstage").children;
    let thirdstage = document.getElementById("thirdstage").children;

    firststage[0].textContent = current1stage.greenCards;
    firststage[1].textContent = current1stage.brownCards;
    firststage[2].textContent = current1stage.blueCards;

    secondstage[0].textContent = current2stage.greenCards;
    secondstage[1].textContent = current2stage.brownCards;
    secondstage[2].textContent = current2stage.blueCards;

    thirdstage[0].textContent = current3stage.greenCards;
    thirdstage[1].textContent = current3stage.brownCards;
    thirdstage[2].textContent = current3stage.blueCards;

    /*
    for(let i = 0; i < firststage.length; i++){
        firststage[i].textContent = i;
    }*/

    console.log("Start the Game");
}

function whichCard(par, id){
    //console.log(par)
    //console.log(id)

    let allCards = document.querySelector(".kartalar").children;
    for(let i = 0; i < allCards.length; i++){
        allCards[i].style.border = "none";
    }

    let selectedCard = document.getElementById(id);
    selectedCard.style.border = "2px solid orange";

ancientsData.forEach((item) => {
    if(item.name === par){

        localStorage.setItem("ancients", JSON.stringify(item.name))
        localStorage.setItem("firstStage", JSON.stringify(item.firstStage))
        localStorage.setItem("secondStage", JSON.stringify(item.secondStage))
        localStorage.setItem("thirdStage", JSON.stringify(item.thirdStage))


        current1stage = JSON.parse(localStorage.getItem("firstStage"));
        current2stage = JSON.parse(localStorage.getItem("secondStage"));
        current3stage = JSON.parse(localStorage.getItem("thirdStage"));

        neededGreens = item.firstStage.greenCards + item.secondStage.greenCards + item.thirdStage.greenCards;
        neededBlues = item.firstStage.blueCards + item.secondStage.blueCards + item.thirdStage.blueCards;
        neededBrowns = item.firstStage.brownCards + item.secondStage.brownCards + item.thirdStage.brownCards;

        console.log("Greens total: " + neededGreens);
        console.log("Blues total: " + neededBlues);
        console.log("Browns total: " + neededBrowns);
    }
})


}

function whichLevel(lvl, id, difficultyID){
    //console.log(lvl)
    //console.log(difficultyID)

    let allCards = document.querySelector(".darajalar").children;
    for(let i = 0; i < allCards.length; i++){
        allCards[i].style.backgroundColor = "lightblue";
        allCards[i].style.border = "2px solid green";
    }

    let selectedLevel = document.getElementById(id);
    selectedLevel.style.backgroundColor = "#00EE77";
    selectedLevel.style.border = "2px solid orange";

    let gameLevel = document.getElementById("showlevel");
    gameLevel.textContent = "Уровень: " + selectedLevel.textContent;
    gameLevel.style.color = "#00EE77";

    /*
    var newBlues = bluecardsData.filter((card) => {
        return card.difficulty === difficultyID;
    }) */

    

    let newGreens = bigFilter(difficultyID, greencardsData, neededGreens)
    let newBlues = bigFilter(difficultyID, bluecardsData, neededBlues);
    let newBrowns = bigFilter(difficultyID, browncardsData, neededBrowns)
    /*browncardsData
    greencardsData*/
    neededGreens
    neededBlues
    neededBrowns

}

function bigFilter(difficultyID, colorCard, howmany){
    let filteredArr = [];

    if(difficultyID === "very_easy"){
        filteredArr = colorCard.filter((el) => {
            return el.difficulty === "easy";
        })

        if(howmany > filteredArr.length){
            let difference = howmany - filteredArr.length;
            
            let newLevel = colorCard.filter((item) => {
                return item.difficulty === "normal";
            })
            for(let i = 0; i < difference; i++){
                let tempIndex = Math.floor(Math.random() * (newLevel.length) + 1)

                if(!filteredArr.includes(newLevel[tempIndex])){
                    filteredArr.push(newLevel[tempIndex])
                } else {
                    filteredArr.push(newLevel[0])
                }
                //filteredArr.includes(newLevel[tempIndex]) ? filteredArr.push(newLevel[0]) : filteredArr.push(newLevel[tempIndex]);

            }
        }
    }

    console.log("Final cards for very easy level, color " + colorCard[0].color + " : ");
    console.log(filteredArr);

}


function showdiffs(){
    console.log("difs")
}



const cardsPlaceholder = document.getElementById("kartalar");

for(let i = 0; i < ancientsData.length; i++){
    let oneCard = document.createElement("div");
    oneCard.style.border = "1px solid black";
    oneCard.style.borderRadius = "15px";
    oneCard.style.position = "relative";
    oneCard.style.height = "287px";
    oneCard.style.width = "221px";
    oneCard.style.margin = "10px";
    //oneCard.style.backgroundColor = "orange";
    let monsterName = ancientsData[i].name.charAt(0).toUpperCase() + ancientsData[i].name.slice(1);
    oneCard.style.backgroundImage = "url('../assets/Ancients/"+ monsterName + ".png')";
    oneCard.style.backgroundSize = "221px 287px";
    oneCard.textContent = monsterName;
    oneCard.style.textAlign = "center";
    oneCard.style.color = "white";
    oneCard.id = "onecard"+i;
    oneCard.addEventListener("click", (e) => {whichCard(ancientsData[i].name, oneCard.id)})

    cardsPlaceholder.appendChild(oneCard);
}

const levelsPlaceholder = document.getElementById("darajalar");

for(let i = 0; i < difficulties.length; i++){
    let oneLevel = document.createElement("div");
    oneLevel.style.border = "2px solid green";
    oneLevel.style.position = "relative";
    oneLevel.style.height = "40px";
    oneLevel.style.width = "90px";
    oneLevel.style.borderRadius = "0 20px 20px 0"
    oneLevel.style.margin = "10px 10px";
    oneLevel.style.padding = "5px";
    oneLevel.style.backgroundColor = "lightblue";
    oneLevel.textContent = difficulties[i].name;
    oneLevel.id = "onelevel"+i;
    oneLevel.addEventListener("click", (e) => {whichLevel(difficulties[i].name, oneLevel.id, difficulties[i].id)})

    levelsPlaceholder.appendChild(oneLevel);
}