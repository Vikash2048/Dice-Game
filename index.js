var randomNumber = Math.floor(Math.random()*6)+1;
var randomNumber1 = Math.floor(Math.random()*6)+1;

var diceImage = "dice" + randomNumber +".png";
var diceImage1 = "dice" + randomNumber1 +".png";

var imageChoosen = "images/"+diceImage;
var imageChoosen1 = "images/"+diceImage1;

document.querySelectorAll("img")[0].setAttribute("src",imageChoosen);
document.querySelectorAll("img")[1].setAttribute("src",imageChoosen1);

if(randomNumber > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 1 won";
}
else if(randomNumber < randomNumber1){
    document.querySelector("h1").innerHTML = "player 2 won";
}
else{
    document.querySelector("h1").innerHTML = "match draw";
}