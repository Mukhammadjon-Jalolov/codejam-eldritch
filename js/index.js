import ancientsData from "../data/ancients.js";
import difficulties from "../data/difficulties.js";

import bluecardsData from "../data/mythicCards/blue/index.js";
import browncardsData from "../data/mythicCards/brown/index.js";
import greencardsData from "../data/mythicCards/green/index.js";

// Testing
//console.log(difficulties);
//console.log(ancientsData);

let current1stage;
let current2stage;
let current3stage;

let neededGreens = 0;
let neededBlues = 0;
let neededBrowns = 0;

let newGreens;
let newBlues;
let newBrowns;

let counter1;
let counter2;
let counter3;

let gameArray = [];

const btn = document.getElementById("mybtn");
btn.textContent = "Замешать колоду";
btn.addEventListener("click", startGame);

const levelsPlaceholder = document.getElementById("darajalar");
const cardsTable = document.getElementById("cardstableID");
const gamecardEl = document.getElementById("gamecard");

let firststage = document.getElementById("firststage").children;
let secondstage = document.getElementById("secondstage").children;
let thirdstage = document.getElementById("thirdstage").children;

let activekarta = document.getElementById("activecard");


function startGame(){
    cardsTable.style.visibility = "visible";
    gamecardEl.style.visibility = "visible";

    firststage[0].textContent = current1stage.greenCards;
    firststage[1].textContent = current1stage.brownCards;
    firststage[2].textContent = current1stage.blueCards;

    secondstage[0].textContent = current2stage.greenCards;
    secondstage[1].textContent = current2stage.brownCards;
    secondstage[2].textContent = current2stage.blueCards;

    thirdstage[0].textContent = current3stage.greenCards;
    thirdstage[1].textContent = current3stage.brownCards;
    thirdstage[2].textContent = current3stage.blueCards;

    console.log("Start the Game");
}

const giveCardEelement = document.getElementById("gamecard");
giveCardEelement.addEventListener("click", giveCards);

function summing(stage){
    let y = 0;
    for(let x in stage){
        y += stage[x];
    }
    return y;
}

function giveCards(){

    let actuelCard;
    const colorArray = ["greenCards", "brownCards", "blueCards"];
    const colorImgs = ["green", "brown", "blue"];
    let realcolor;

    let randomColor;

    if(counter1 > 0){
        //randomColor = Math.floor(Math.random() * 2 + 0);    // 0 chiqdi desak
        
        if(gameArray[0].greenCards > 0){
            actuelCard = newGreens.shift()
            realcolor = "green";
            gameArray[0].greenCards--;
            firststage[0].textContent = gameArray[0].greenCards;

        } else if(gameArray[0].greenCards === 0){
            if(gameArray[0].brownCards > 0){
                actuelCard = newBrowns.shift()
                realcolor = "brown";
                gameArray[0].brownCards--;
                firststage[1].textContent = gameArray[0].brownCards;

            } else if(gameArray[0].brownCards === 0){
                if(gameArray[0].blueCards > 0){
                    actuelCard = newBlues.shift()
                    realcolor = "blue";
                    gameArray[0].blueCards--;
                    firststage[2].textContent = gameArray[0].blueCards;

                }
            }
        }

        console.log("First stage " + counter1)
        counter1--;
    } 
    
    else if(counter2 > 0){
        if(gameArray[1].greenCards > 0){
            actuelCard = newGreens.shift()
            realcolor = "green";
            gameArray[1].greenCards--;
            secondstage[0].textContent = gameArray[1].greenCards;

        } else if(gameArray[1].greenCards === 0){
            if(gameArray[1].brownCards > 0){
                actuelCard = newBrowns.shift()
                realcolor = "brown";
                gameArray[1].brownCards--;
                secondstage[1].textContent = gameArray[1].brownCards;

            } else if(gameArray[1].brownCards === 0){
                if(gameArray[1].blueCards > 0){
                    actuelCard = newBlues.shift()
                    realcolor = "blue";
                    gameArray[1].blueCards--;
                    secondstage[2].textContent = gameArray[1].blueCards;
                }
            }
        }

        console.log("Second stage " + counter2)
        counter2--;
    } 
    
    else if(counter3 > 0){
        if(gameArray[2].greenCards > 0){
            actuelCard = newGreens.shift()
            realcolor = "green";
            gameArray[2].greenCards--;
            thirdstage[0].textContent = gameArray[2].greenCards;

        } else if(gameArray[2].greenCards === 0){
            if(gameArray[2].brownCards > 0){
                actuelCard = newBrowns.shift()
                realcolor = "brown";
                gameArray[2].brownCards--;
                thirdstage[1].textContent = gameArray[2].brownCards;

            } else if(gameArray[2].brownCards === 0){
                if(gameArray[2].blueCards > 0){
                    actuelCard = newBlues.shift()
                    realcolor = "blue";
                    gameArray[2].blueCards--;
                    thirdstage[2].textContent = gameArray[2].blueCards;
                }
            }
        }

        console.log("Third stage " + counter3)
        counter3--;
    }

    else {
        gamecardEl.style.visibility = "hidden";
        console.log("GAME IS OVER")
    }

    //Testing
    console.log(counter1)
    console.log(counter2)
    console.log(counter3)

    activekarta.style.visibility = "visible";

    let imgstr = "https://github.com/Mukhammadjon-Jalolov/codejam-eldritch/blob/main/assets/MythicCards/" + realcolor + "/" + actuelCard.cardFace + ".png?raw=true"
    activekarta.style.backgroundImage = "url(" + imgstr +")";
    //activekarta.style.backgroundImage = "url('../assets/MythicCards/" + realcolor + "/" + actuelCard.cardFace + ".png')";
    
}

function whichCard(par, id){
    //console.log(par)
    //console.log(id)

    levelsPlaceholder.style.visibility = "visible";

    let allCards = document.querySelector(".kartalar").children;
    for(let i = 0; i < allCards.length; i++){
        allCards[i].style.border = "2px solid white";
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

            counter1 = summing(current1stage);
            counter2 = summing(current2stage);
            counter3 = summing(current3stage);

            console.log("Greens total: " + neededGreens);
            console.log("Blues total: " + neededBlues);
            console.log("Browns total: " + neededBrowns);

            gameArray.push(current1stage);
            gameArray.push(current2stage);
            gameArray.push(current3stage);

        }
    })
}

function whichLevel(lvl, id, difficultyID){
    cardsTable.style.visibility = "hidden";
    gamecardEl.style.visibility = "hidden";
    activekarta.style.visibility = "hidden";

    current1stage = JSON.parse(localStorage.getItem("firstStage"));
    current2stage = JSON.parse(localStorage.getItem("secondStage"));
    current3stage = JSON.parse(localStorage.getItem("thirdStage"));
    gameArray = [];
    gameArray.push(current1stage);
    gameArray.push(current2stage);
    gameArray.push(current3stage);

    counter1 = summing(current1stage);
    counter2 = summing(current2stage);
    counter3 = summing(current3stage);

    console.log(gameArray);
    
    btn.style.visibility = "visible";

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

    newGreens = bigFilter(difficultyID, greencardsData, neededGreens)
    newBlues = bigFilter(difficultyID, bluecardsData, neededBlues);
    newBrowns = bigFilter(difficultyID, browncardsData, neededBrowns)

}

function bigFilter(difficultyID, colorCard, howmany){
    function shuffle(array){
        array.sort(() => Math.random() - 0.5);
    }

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
                let tempIndex = Math.floor(Math.random() * (newLevel.length) + 0)

                // NEED TO PUSH ONLY THE UNIQUE ELEMENTS TO THE ARRAY
                if(!filteredArr.includes(newLevel[tempIndex])){
                    filteredArr.push(newLevel[tempIndex])
                } else {
                    filteredArr.push(newLevel[0])
                }
            }
            shuffle(filteredArr);
            
        } else {
            let difference = filteredArr.length - howmany;
            filteredArr.splice(0, difference);
        }
    }
    
    else if(difficultyID === "easy"){
        filteredArr = colorCard.filter((el) => {
            return el.difficulty !== "hard";
        })
        shuffle(filteredArr);

        if(howmany > filteredArr.length){
            let difference = howmany - filteredArr.length;
            
            for(let i = 0; i < difference; i++){
                let tempIndex = Math.floor(Math.random() * (filteredArr.length) + 0)

                // NEED TO PUSH ONLY THE UNIQUE ELEMENTS TO THE ARRAY
                if(!filteredArr.includes(filteredArr[tempIndex])){
                    filteredArr.push(filteredArr[tempIndex])
                } else {
                    filteredArr.push(filteredArr[0])
                }
            }
        } else {
            let difference = filteredArr.length - howmany;
            filteredArr.splice(0, difference);
        }
    }

    else if(difficultyID === "normal"){
        filteredArr = colorCard;
        shuffle(filteredArr);

        if(howmany > filteredArr.length){
            let difference = howmany - filteredArr.length;
            
            for(let i = 0; i < difference; i++){
                let tempIndex = Math.floor(Math.random() * (filteredArr.length) + 0)

                // NEED TO PUSH ONLY THE UNIQUE ELEMENTS TO THE ARRAY
                if(!filteredArr.includes(filteredArr[tempIndex])){
                    filteredArr.push(filteredArr[tempIndex])
                } else {
                    filteredArr.push(filteredArr[0])
                }
            }
        } else {
            let difference = filteredArr.length - howmany;
            filteredArr.splice(0, difference);
        }
    }

    else if(difficultyID === "hard"){
        filteredArr = colorCard.filter((el) => {
            return el.difficulty !== "easy";
        })
        shuffle(filteredArr);

        if(howmany > filteredArr.length){
            let difference = howmany - filteredArr.length;
            
            for(let i = 0; i < difference; i++){
                let tempIndex = Math.floor(Math.random() * (filteredArr.length) + 0)

                // NEED TO PUSH ONLY THE UNIQUE ELEMENTS TO THE ARRAY
                if(!filteredArr.includes(filteredArr[tempIndex])){
                    filteredArr.push(filteredArr[tempIndex])
                } else {
                    filteredArr.push(filteredArr[0])
                }
            }
        } else {
            let difference = filteredArr.length - howmany;
            filteredArr.splice(0, difference);
        }
    }

    else if(difficultyID === "very_hard"){
        filteredArr = colorCard.filter((el) => {
            return el.difficulty === "hard";
        })

        if(howmany > filteredArr.length){
            let difference = howmany - filteredArr.length;
            
            let newLevel = colorCard.filter((item) => {
                return item.difficulty === "normal";
            })
            for(let i = 0; i < difference; i++){
                let tempIndex = Math.floor(Math.random() * (newLevel.length) + 0)

                // NEED TO PUSH ONLY THE UNIQUE ELEMENTS TO THE ARRAY
                if(!filteredArr.includes(newLevel[tempIndex])){
                    filteredArr.push(newLevel[tempIndex])
                } else {
                    filteredArr.push(newLevel[0])
                }
            }
            shuffle(filteredArr);

        } else {
            let difference = filteredArr.length - howmany;
            filteredArr.splice(0, difference);
        }
    }

    //console.log("Final cards for very easy level, color " + colorCard[0].color + " : ");
    //console.log(filteredArr);
    return filteredArr;
}


const cardsPlaceholder = document.getElementById("kartalar");

for(let i = 0; i < ancientsData.length; i++){
    let oneCard = document.createElement("div");
    oneCard.style.border = "2px solid white";
    oneCard.style.borderRadius = "15px";
    oneCard.style.position = "relative";
    oneCard.style.height = "287px";
    oneCard.style.width = "221px";
    oneCard.style.margin = "10px";
    //oneCard.style.backgroundColor = "orange";
    let monsterName = ancientsData[i].name.charAt(0).toUpperCase() + ancientsData[i].name.slice(1);
    
    let str = "https://github.com/Mukhammadjon-Jalolov/codejam-eldritch/blob/main/assets/Ancients/" + monsterName + ".png?raw=true";
    oneCard.style.backgroundImage = "url("+ str +")";
    
    //oneCard.style.backgroundImage = "url('../assets/Ancients/"+ monsterName + ".png')";
    oneCard.style.backgroundSize = "221px 287px";
    oneCard.textContent = monsterName;
    oneCard.style.textAlign = "center";
    oneCard.style.color = "white";
    oneCard.id = "onecard"+i;
    oneCard.addEventListener("click", (e) => {whichCard(ancientsData[i].name, oneCard.id)})

    cardsPlaceholder.appendChild(oneCard);
}

for(let i = 0; i < difficulties.length; i++){
    let oneLevel = document.createElement("div");
    oneLevel.style.border = "2px solid green";
    oneLevel.style.position = "relative";
    oneLevel.style.height = "40px";
    oneLevel.style.width = "90px";
    oneLevel.style.borderRadius = "0 20px 20px 0"
    oneLevel.style.margin = "5px 10px";
    oneLevel.style.padding = "5px";
    oneLevel.style.backgroundColor = "lightblue";
    oneLevel.textContent = difficulties[i].name;
    oneLevel.id = "onelevel"+i;
    oneLevel.addEventListener("click", (e) => {whichLevel(difficulties[i].name, oneLevel.id, difficulties[i].id)})

    levelsPlaceholder.appendChild(oneLevel);
}