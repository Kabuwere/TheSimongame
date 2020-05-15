alert("working");

//creating an array
buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];

function nextSequence() {
  var randomNumber = Math.random();
  randomNumber = randomNumber * 3;
  randomNumber = Math.floor(randomNumber) + 1;
  var randomChoosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChoosenColor);
};
