function randomNumberGenerator() {
  return Math.round(Math.random() * 5 + 1);
}

var firstDice = randomNumberGenerator();
var secondDice = randomNumberGenerator();

var imagePath = "images/";
var randomDiceImage = imagePath + "dice" + firstDice + ".png";
var randomDiceImage2 = imagePath + "dice" + secondDice + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (!(firstDice == secondDice)) {
  if (firstDice > secondDice) {
    document.querySelectorAll("p")[0].innerHTML = "Player 1 Wins!";
  } else {
    document.querySelectorAll("p")[1].innerHTML = "Player 2 Wins!";
  }
} else {
  const drawElement = document.createElement("p");
  const node = document.createTextNode("Its a DRAW!");

  drawElement.appendChild(node);

  const element = document.getElementsByTagName("h1")[0];

  element.appendChild(drawElement);
}
