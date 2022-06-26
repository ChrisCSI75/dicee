// alert("JS test!");

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImg1 = "dice" + randomNumber1 + ".png";
var imageSource1 = "images/" + randomDiceImg1;

var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", imageSource1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var imageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "draw";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 P1 Wins";
} else {
  document.querySelector("h1").innerHTML = "P2 wins 🚩";
}
