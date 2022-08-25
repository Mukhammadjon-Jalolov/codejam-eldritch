import difficulties from "../data/difficulties";


var element;

window.onload = () => {
    element = document.getElementById("cardID");
    btn = document.getElementById("mybtn");
    btn.textContent = "Click here";
}

function showalert(){
    element.textContent = "Start the game";
    window.alert("This is a message");
    console.log(difficulties);
}

function showdiffs(){
    console.log("difs")
}
